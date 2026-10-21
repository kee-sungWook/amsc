import fs from "fs/promises";
import path from "path";
import { envConfig } from "@config/dotenv.config.js";
import { withTransaction } from "@connect/query.js";
import * as repo from "@repo/repo.industry.js";
import { AppError } from "@utils/err.app.js";

type IndustryInput = { name?: string; code?: string };

const ICON_DIR = path.join(envConfig.ROOT, "uploads", "industry_icon");
const ICON_URL = "/uploads/industry_icon";
const ICON_PREFIX = "mem_service";

const validateInput = (location: string, { name, code }: IndustryInput) => {
    const trimName = name?.trim() ?? "";
    const trimCode = code?.trim() ?? "";
    if (!trimName || trimName.length > 30) {
        throw new AppError("INVALID_NAME", location, "업종명은 1~30자로 입력해 주세요", 400, { name });
    }
    if (!/^[A-Z]{2}$/.test(trimCode)) {
        throw new AppError("INVALID_CODE", location, "업종코드는 영어 대문자 2자리로 입력해 주세요", 400, { code });
    }
    return { name: trimName, code: trimCode };
};

// code 컬럼 unique 제약 위반을 AppError 로 변환
const rethrowDuplicate = (err: unknown, location: string, code: string): never => {
    if ((err as { code?: string })?.code === "ER_DUP_ENTRY") {
        throw new AppError("DUPLICATE_CODE", location, "이미 사용중인 업종코드입니다", 409, { code }, err);
    }
    throw err;
};

// 아이콘 파일명: mem_service + 코드 + 원본 확장자
const iconFileName = (code: string, ext: string) => `${ICON_PREFIX}${code}${ext.toLowerCase()}`;

// 해당 코드의 기존 아이콘(확장자 무관) 삭제
const removeIcons = async (code: string) => {
    const files = await fs.readdir(ICON_DIR).catch(() => [] as string[]);
    const base = `${ICON_PREFIX}${code}`;
    await Promise.all(
        files
            .filter((file) => path.parse(file).name === base)
            .map((file) => fs.rm(path.join(ICON_DIR, file), { force: true }))
    );
};

// 아이콘 저장 (같은 이름으로 덮어씀)
const saveIcon = async (code: string, iconFile: Express.Multer.File) => {
    const fileName = iconFileName(code, path.extname(iconFile.originalname));
    await fs.mkdir(ICON_DIR, { recursive: true });
    await removeIcons(code);
    await fs.writeFile(path.join(ICON_DIR, fileName), iconFile.buffer);
    return `${ICON_URL}/${fileName}`;
};

// 코드 변경시 기존 아이콘을 새 코드 이름으로 변경
const renameIcon = async (prevIcon: string, code: string) => {
    const prevName = path.basename(prevIcon);
    const fileName = iconFileName(code, path.extname(prevName));
    await removeIcons(code);
    await fs.rename(path.join(ICON_DIR, prevName), path.join(ICON_DIR, fileName));
    return `${ICON_URL}/${fileName}`;
};

export const getIndustries = async () => {
    return await repo.selectIndustries();
};

export const insertIndustry = async (input: IndustryInput, iconFile?: Express.Multer.File) => {
    const location = "[svc.industry] insertIndustry";
    const { name, code } = validateInput(location, input);
    const icon = iconFile ? `${ICON_URL}/${iconFileName(code, path.extname(iconFile.originalname))}` : null;

    // 파일 저장 실패시 DB 도 롤백
    return await withTransaction(async (conn) => {
        const insertRes = await repo
            .insertIndustry(name, code, icon, conn)
            .catch((err) => rethrowDuplicate(err, location, code));
        if (!insertRes.affectedRows) {
            throw new AppError("INSERT_FAIL", location, "insert fail", 400, { name, code });
        }
        if (iconFile) await saveIcon(code, iconFile);

        const [row] = await repo.selectIndustryBySeq(insertRes.insertId, conn);
        return row;
    });
};

export const updateIndustry = async (seq: number, input: IndustryInput, iconFile?: Express.Multer.File) => {
    const location = "[svc.industry] updateIndustry";
    if (!seq || Number.isNaN(seq)) {
        throw new AppError("INVALID_SEQ", location, "seq is not number", 400, { seq });
    }
    const { name, code } = validateInput(location, input);

    const [prev] = await repo.selectIndustryBySeq(seq);
    if (!prev) {
        throw new AppError("NOT_FOUND", location, "industry not found", 404, { seq });
    }

    const codeChanged = prev.code !== code;
    let icon = prev.icon;
    if (iconFile) icon = `${ICON_URL}/${iconFileName(code, path.extname(iconFile.originalname))}`;
    else if (prev.icon && codeChanged) icon = `${ICON_URL}/${iconFileName(code, path.extname(prev.icon))}`;

    return await withTransaction(async (conn) => {
        await repo.updateIndustry(seq, name, code, icon, conn).catch((err) => rethrowDuplicate(err, location, code));

        if (iconFile) {
            await saveIcon(code, iconFile);
            if (codeChanged) await removeIcons(prev.code);
        } else if (prev.icon && codeChanged) {
            await renameIcon(prev.icon, code);
        }

        const [row] = await repo.selectIndustryBySeq(seq, conn);
        return row;
    });
};

import fs from "fs/promises";
import path from "path";
import { envConfig } from "@config/dotenv.config.js";
import { withTransaction } from "@connect/query.js";
import * as repo from "@repo/repo.industry.js";
import { AppError } from "@utils/err.app.js";

type IndustryInput = { name?: string; code?: string };
type ServiceInput = IndustryInput & { parent_code?: string };

const ICON_DIR = path.join(envConfig.ROOT, "uploads", "industry_icon");
const ICON_URL = "/uploads/industry_icon";

const INDUSTRY_CODE_REG = /^[A-Z]{2}$/;
const SERVICE_CODE_REG = /^[A-Za-z]{1,20}$/;

const validateInput = (location: string, { name, code }: IndustryInput) => {
    const trimName = name?.trim() ?? "";
    const trimCode = code?.trim() ?? "";
    if (!trimName || trimName.length > 30) {
        throw new AppError("INVALID_NAME", location, "업종명은 1~30자로 입력해 주세요", 400, { name });
    }
    if (!INDUSTRY_CODE_REG.test(trimCode)) {
        throw new AppError("INVALID_CODE", location, "업종코드는 영어 대문자 2자리로 입력해 주세요", 400, { code });
    }
    return { name: trimName, code: trimCode };
};

const validateServiceInput = (location: string, { name, code }: IndustryInput) => {
    const trimName = name?.trim() ?? "";
    const trimCode = code?.trim() ?? "";
    if (!trimName || trimName.length > 30) {
        throw new AppError("INVALID_NAME", location, "서비스명은 1~30자로 입력해 주세요", 400, { name });
    }
    if (!SERVICE_CODE_REG.test(trimCode)) {
        throw new AppError("INVALID_CODE", location, "서비스코드는 영문 20자 이내로 입력해 주세요", 400, {
            code
        });
    }
    return { name: trimName, code: trimCode };
};

const validateParentCode = (location: string, parentCode?: string) => {
    if (!INDUSTRY_CODE_REG.test(parentCode ?? "")) {
        throw new AppError("INVALID_CODE", location, "업종코드가 올바르지 않습니다", 400, { parentCode });
    }
    return parentCode!;
};

// unique 제약 위반을 AppError 로 변환
const rethrowDuplicate = (err: unknown, location: string, code: string, message: string): never => {
    if ((err as { code?: string })?.code === "ER_DUP_ENTRY") {
        throw new AppError("DUPLICATE_CODE", location, message, 409, { code }, err);
    }
    throw err;
};

// 아이콘 파일명 (확장자 제외)
// 업종: mem_industry_FX / 서비스: mem_service_FX_FXA
const industryIconBase = (code: string) => `mem_industry_${code}`;
const serviceIconBase = (parentCode: string, code: string) => `mem_service_${parentCode}_${code}`;

const iconPath = (base: string, ext: string) => `${ICON_URL}/${base}${ext.toLowerCase()}`;

// 해당 이름의 기존 아이콘(확장자 무관) 삭제
const removeIcons = async (base: string) => {
    const files = await fs.readdir(ICON_DIR).catch(() => [] as string[]);
    await Promise.all(
        files
            .filter((file) => path.parse(file).name === base)
            .map((file) => fs.rm(path.join(ICON_DIR, file), { force: true }))
    );
};

// 아이콘 저장 (같은 이름으로 덮어씀)
const saveIcon = async (base: string, iconFile: Express.Multer.File) => {
    const fileName = path.basename(iconPath(base, path.extname(iconFile.originalname)));
    await fs.mkdir(ICON_DIR, { recursive: true });
    await removeIcons(base);
    await fs.writeFile(path.join(ICON_DIR, fileName), iconFile.buffer);
};

// 코드 변경시 기존 아이콘을 새 이름으로 변경
const renameIcon = async (prevIcon: string, base: string) => {
    const prevName = path.basename(prevIcon);
    const nextIcon = iconPath(base, path.extname(prevName));
    await removeIcons(base);
    await fs.rename(path.join(ICON_DIR, prevName), path.join(ICON_DIR, path.basename(nextIcon)));
    return nextIcon;
};

export const getIndustries = async () => {
    return await repo.selectIndustries();
};

export const insertIndustry = async (input: IndustryInput, iconFile?: Express.Multer.File) => {
    const location = "[svc.industry] insertIndustry";
    const { name, code } = validateInput(location, input);
    const base = industryIconBase(code);
    const icon = iconFile ? iconPath(base, path.extname(iconFile.originalname)) : null;

    // 파일 저장 실패시 DB 도 롤백
    return await withTransaction(async (conn) => {
        const insertRes = await repo
            .insertIndustry(name, code, icon, conn)
            .catch((err) => rethrowDuplicate(err, location, code, "이미 사용중인 업종코드입니다"));
        if (!insertRes.affectedRows) {
            throw new AppError("INSERT_FAIL", location, "insert fail", 400, { name, code });
        }
        if (iconFile) await saveIcon(base, iconFile);

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
    const base = industryIconBase(code);
    let icon = prev.icon;
    if (iconFile) icon = iconPath(base, path.extname(iconFile.originalname));
    else if (prev.icon && codeChanged) icon = iconPath(base, path.extname(prev.icon));

    return await withTransaction(async (conn) => {
        await repo
            .updateIndustry(seq, name, code, icon, conn)
            .catch((err) => rethrowDuplicate(err, location, code, "이미 사용중인 업종코드입니다"));

        if (iconFile) {
            await saveIcon(base, iconFile);
            if (codeChanged) await removeIcons(industryIconBase(prev.code));
        } else if (prev.icon && codeChanged) {
            await renameIcon(prev.icon, base);
        }

        // 서비스의 parent_code 는 FK(ON UPDATE CASCADE)로 변경되므로 아이콘 이름만 맞춰줌
        if (codeChanged) {
            const services = await repo.selectServicesByParentCode(code, conn);
            for (const service of services) {
                if (!service.icon) continue;
                const nextIcon = await renameIcon(service.icon, serviceIconBase(code, service.code));
                await repo.updateServiceIcon(service.seq, nextIcon, conn);
            }
        }

        const [row] = await repo.selectIndustryBySeq(seq, conn);
        return row;
    });
};

export const getServices = async (parentCode: string) => {
    validateParentCode("[svc.industry] getServices", parentCode);
    return await repo.selectServicesByParentCode(parentCode);
};

export const insertService = async (input: ServiceInput, iconFile?: Express.Multer.File) => {
    const location = "[svc.industry] insertService";
    const parentCode = validateParentCode(location, input.parent_code);
    const { name, code } = validateServiceInput(location, input);
    const base = serviceIconBase(parentCode, code);
    const icon = iconFile ? iconPath(base, path.extname(iconFile.originalname)) : null;

    return await withTransaction(async (conn) => {
        const insertRes = await repo.insertService(parentCode, name, code, icon, conn).catch((err) => {
            // 존재하지 않는 업종코드 (FK 위반)
            if ((err as { code?: string })?.code === "ER_NO_REFERENCED_ROW_2") {
                throw new AppError("NOT_FOUND", location, "업종을 찾을 수 없습니다", 404, { parentCode }, err);
            }
            return rethrowDuplicate(err, location, code, "해당 업종에 이미 사용중인 서비스코드입니다");
        });
        if (!insertRes.affectedRows) {
            throw new AppError("INSERT_FAIL", location, "insert fail", 400, { parentCode, name, code });
        }
        if (iconFile) await saveIcon(base, iconFile);

        const [row] = await repo.selectServiceBySeq(insertRes.insertId, conn);
        return row;
    });
};

export const updateService = async (seq: number, input: IndustryInput, iconFile?: Express.Multer.File) => {
    const location = "[svc.industry] updateService";
    if (!seq || Number.isNaN(seq)) {
        throw new AppError("INVALID_SEQ", location, "seq is not number", 400, { seq });
    }
    const { name, code } = validateServiceInput(location, input);

    const [prev] = await repo.selectServiceBySeq(seq);
    if (!prev) {
        throw new AppError("NOT_FOUND", location, "service not found", 404, { seq });
    }

    const codeChanged = prev.code !== code;
    const base = serviceIconBase(prev.parent_code, code);
    let icon = prev.icon;
    if (iconFile) icon = iconPath(base, path.extname(iconFile.originalname));
    else if (prev.icon && codeChanged) icon = iconPath(base, path.extname(prev.icon));

    return await withTransaction(async (conn) => {
        await repo
            .updateService(seq, name, code, icon, conn)
            .catch((err) => rethrowDuplicate(err, location, code, "해당 업종에 이미 사용중인 서비스코드입니다"));

        if (iconFile) {
            await saveIcon(base, iconFile);
            if (codeChanged) await removeIcons(serviceIconBase(prev.parent_code, prev.code));
        } else if (prev.icon && codeChanged) {
            await renameIcon(prev.icon, base);
        }

        const [row] = await repo.selectServiceBySeq(seq, conn);
        return row;
    });
};

import multer from "multer";
import path from "path";
import fs from 'fs';
import { envConfig } from "@config/dotenv.config.js";

function createUploadPath() {
    const uploadPath = path.join(envConfig.ROOT, "uploads");
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    return uploadPath;
}

export const uploadModule = multer({
    storage: multer.diskStorage({
        destination: (_, __, cb) => {
            const uploadPath = createUploadPath();
            cb(null, uploadPath);
        },
        filename: (_, file, cb) => {
            const newName = `${crypto.randomUUID()}${path.extname(file.originalname)}`;
            cb(null, newName);
        }
    }),
    limits: { fileSize: 10 * 1024 * 1024 },
});

// 파일을 메모리로만 받음 (검증/DB 반영 후 svc 에서 직접 저장)
export const uploadMemoryImage = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (_, file, cb) => cb(null, file.mimetype.startsWith("image/"))
});

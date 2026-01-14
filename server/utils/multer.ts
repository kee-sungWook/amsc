import multer from "multer";
import path from "path";
import fs from 'fs';

function createUploadPath() {
    const uploadPath = path.join(process.cwd(), "uploads");
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
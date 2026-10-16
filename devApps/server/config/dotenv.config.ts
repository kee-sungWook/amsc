import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = process.env.NODE_ENV || "development";
// devApps/server/config(개발)와 dist/backend/config(운영)는 루트에서 같은 깊이
const projectRoot = path.resolve(__dirname, `../../../`);
const envPath = path.resolve(projectRoot, `.env.${env}`);
console.log(`projectRoot : ${projectRoot}`);

dotenv.config({
    path: envPath
});

export const envConfig = {
    ROOT: projectRoot,
    NODE_ENV: env,

    SERVER: {
        HOST: process.env.SERVER_HOST,
        PORT: Number(process.env.SERVER_PORT)
    },

    DB: {
        HOST: process.env.DB_HOST,
        PORT: Number(process.env.DB_PORT),
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        NAME: process.env.DB_NAME,
        URL: process.env.DB_URL,
        SHADOW_DATABASE_URL: process.env.SHADOW_DATABASE_URL
    }
};

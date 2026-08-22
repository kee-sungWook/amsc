import { envConfig } from '@config/dotenv.config.js';
import express from "express";
import http from "http";
import apiRouter from "./router.js";
import path from 'path';

const app = express();
const UPLOAD_DIR = path.join(envConfig.ROOT, 'uploads');
const STATIC_DIR = path.join(envConfig.ROOT, 'static');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(UPLOAD_DIR));
app.use('/static', express.static(STATIC_DIR));
app.use("/api", apiRouter);

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error("==========================================");
    console.error("[Global Error Handler]");
    console.error("메시지:", err.message);
    console.error("스택 트레이스:", err.stack);
    console.error("==========================================");
    console.error(`${err}`);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || "내부 서버 오류"
    });
});

const server = http.createServer(app);
const PORT = envConfig.SERVER.PORT;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
    console.log(`AMS for Driver Server running at http://localhost:${PORT}`);
});

let isShuttingDown = false;
async function gracefulShutdown(signal: string) {
    if (isShuttingDown) return;
    isShuttingDown = true;

    console.log(`[${signal}] 종료시작...`);

    server.close(async (err) => {
        if (err) console.error(`[SHUTDOWN] 서버 종료중 에러 `, err);
        console.log("[SHUTDOWN] 정상 종료 완료");
        process.exit(err ? 1 : 0);
    });

    setTimeout(() => {
        console.error(`[SHUTDOWN] 타임아웃 - 강제종료`);
        process.exit(1);
    }, 10000).unref();
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("uncaughtException", (err) => {
    console.error("[UNCAUGHT EXCEPTION]", err);
    gracefulShutdown("uncaughtException");
});
process.on("unhandledRejection", (reason) => {
    console.error("[UNHANDLED REJECTION]", reason);
});

import "dotenv/config";
import express from "express";
import http from "http";
import apiRouter from "./router.js";
import path from 'path';

const app = express();
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

app.use(express.json());
app.use('/uploads', express.static(UPLOAD_DIR));
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
const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => {
    console.log(`AMS for Driver Server running at http://localhost:${PORT}`);
});
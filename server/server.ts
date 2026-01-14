import "dotenv/config";
import express from "express";
import http from "http";
import apiRouter from "router.js";
import path from 'path';

const app = express();
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

app.use(express.json());
app.use('/uploads', express.static(UPLOAD_DIR));
app.use("/api", apiRouter);

const server = http.createServer(app);
const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => {
    console.log(`AMS for Driver Server running at http://localhost:${PORT}`);
});
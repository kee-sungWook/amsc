import "dotenv/config";
import express from "express";
import http from "http";
import apiRouter from "router.js";
const app = express();

app.use(express.json());
app.use("/api", apiRouter);

const server = http.createServer(app);
const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => {
    console.log(`AMS for Driver Server running at http://localhost:${PORT}`);
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    root: path.resolve(__dirname, "service"),
    envDir: path.resolve(__dirname),
    publicDir: path.resolve(__dirname, "service/public"),
    plugins: [react()],
    build: {
        outDir: path.resolve(__dirname, "dist/service"),
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            "@interface": path.resolve(__dirname, "service/src/interface"),
            "@components": path.resolve(__dirname, "service/src/components"),
            "@scss": path.resolve(__dirname, "service/src/scss"),
            "@pages": path.resolve(__dirname, "service/src/pages"),
            "@store": path.resolve(__dirname, "service/src/store"),
            "@utils": path.resolve(__dirname, "service/src/utils"),
        },
    },
    server: {
        proxy: {
            "/api": { target: "https://catrige.net", changeOrigin: true, secure: false }
        }
    }
});

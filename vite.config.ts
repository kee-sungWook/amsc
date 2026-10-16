import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    root: path.resolve(__dirname, "devApps/service"),
    envDir: path.resolve(__dirname),
    publicDir: path.resolve(__dirname, "devApps/service/public"),
    plugins: [react()],
    build: {
        outDir: path.resolve(__dirname, "dist/service"),
        emptyOutDir: true
    },
    resolve: {
        alias: {
            "@api": path.resolve(__dirname, "devApps/service/src/api"),
            "@interface": path.resolve(__dirname, "devApps/service/src/interface"),
            "@components": path.resolve(__dirname, "devApps/service/src/components"),
            "@scss": path.resolve(__dirname, "devApps/service/src/scss"),
            "@pages": path.resolve(__dirname, "devApps/service/src/pages"),
            "@store": path.resolve(__dirname, "devApps/service/src/store"),
            "@utils": path.resolve(__dirname, "devApps/service/src/utils"),
            "@hooks": path.resolve(__dirname, "devApps/service/src/hooks")
        }
    },
    server: {
        host: true,
        proxy: {
            "/api": { target: "http://localhost:45780", changeOrigin: true, secure: false }
        }
    }
});

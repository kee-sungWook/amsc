import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    root: path.resolve(__dirname, "service"),
    envDir: path.resolve(__dirname),
    publicDir: path.resolve(__dirname, "service/public"),
    plugins: [
        react(),
        // VitePWA({
        //     registerType: "autoUpdate",
        //     injectRegister: "auto",
        //     manifest: {
        //         name: "AMS",
        //         short_name: "AMS",
        //         start_url: "/",
        //         display: "standalone",
        //         theme_color: "#0d6efd",
        //         background_color: "#ffffff",
        //         icons: [
        //             { src: "/icons/ic_192.png", sizes: "192x192", type: "image/png" },
        //             { src: "/icons/ic_512.png", sizes: "512x512", type: "image/png" }
        //         ]
        //     }
        // })
    ],
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
            "@hooks": path.resolve(__dirname, "service/src/hooks"),
        },
    },
    server: {
        proxy: {
            "/api": { target: "https://catrige.com", changeOrigin: true, secure: false }
        }
    }
});

import { envConfig } from "./config/dotenv.config.js";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations"
    },
    datasource: {
        url: envConfig.DB.URL,
        shadowDatabaseUrl: envConfig.DB.SHADOW_DATABASE_URL
    }
});

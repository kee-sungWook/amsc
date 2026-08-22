import { envConfig } from "@config/dotenv.config.js";
import admin from "firebase-admin";
import path from "path";


const serviceAccountPath = path.resolve(envConfig.ROOT, "server", "config", "fcm_serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
});

export default admin;
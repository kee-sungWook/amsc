import admin from "firebase-admin";
import path from "path";

const serviceAccountPath = path.join(process.cwd(), "/config/fcm_serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
});

export default admin;
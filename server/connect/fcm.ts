import admin from "@utils/firebase.js";

interface MsgType {
    token: string;
    title: string;
    body: string;
    data: Record<string, any>;
}

export async function sendFcmMsg({ token, title, body, data = {} }: MsgType) {
    console.log('Sending FCM message to token:', token, title, body, data);
    const message = {
        token,
        notification: { title, body },
        data
    };
    return admin.messaging().send(message);
}
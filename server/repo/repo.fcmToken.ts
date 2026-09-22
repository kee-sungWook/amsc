import { selectQuery } from "@connect/query";
import { SimpleRow } from "@models/SimpleRow";

export const getFcmTokenBySeq = async (seq: number) => {
    const res = await selectQuery<SimpleRow<{ fcmToken: string }>[]>(
        `SELECT fcmToken FROM ams_user WHERE seq = ? AND fcmToken IS NOT NULL AND fcmToken != ''`,
        [seq]
    );
    return res;
};

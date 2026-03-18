import { RowDataPacket } from "mysql2";

export interface PointLog extends RowDataPacket {
    seq: number;
    userSeq: number;
    utilize: string;
    subject: string;
    amount: number;
    balance: number;
    wday: string;
    eday: string | null;
}

export interface Withdrawal extends PointLog {
    name: string;
    owner: string;
    bankName: string;
    accountNum: string;
}
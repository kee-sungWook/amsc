import { RowDataPacket } from "mysql2";

export interface Qna extends RowDataPacket {
    seq: number;
    title: string;
    question: string;
    answer: string | null;
    pic: string | null;
    writer: number;
    wday: string;
}

import { RowDataPacket } from "mysql2";

export interface Notice extends RowDataPacket {
    seq: number;
    title: string;
    body: string | null;
    pic: string | null;
    writer: string;
    wday: string;
}
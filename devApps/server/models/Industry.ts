import { RowDataPacket } from "mysql2";

export interface Industry extends RowDataPacket {
    seq: number;
    name: string;
    code: string;
    icon: string | null;
}

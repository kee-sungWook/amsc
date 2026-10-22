import { RowDataPacket } from "mysql2";

export interface Industry extends RowDataPacket {
    seq: number;
    name: string;
    code: string;
    icon: string | null;
}

export interface IndustryService extends RowDataPacket {
    seq: number;
    parent_code: string;
    name: string;
    code: string;
    icon: string | null;
}

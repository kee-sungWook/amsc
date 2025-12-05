import { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
    seq: number;
    type: string;
    manager: number;
    id: string;
    name: string;
    email: string;
    phone: string;
    jday: string;
}
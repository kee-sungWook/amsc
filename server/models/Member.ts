import { RowDataPacket } from "mysql2";

export interface Member extends RowDataPacket {
    seq: number;
    type: string;
    reference: number;
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    businessNum: string;
    address: string;
    addrNum: string;
    addrX: string;
    addrY: string;
    jday: string;
}
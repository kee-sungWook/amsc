import { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
    seq: number;
    type: string;
    industry: string;
    service: string;
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    businessNum: string;
    fcmToken: string;
    addr1: string;
    addr2: string;
    sido: string;
    sigungu: string;
    addrX: string;
    addrY: string;
    point: number;
    jday: string;
}

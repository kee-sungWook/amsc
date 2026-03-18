import { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
    seq: number;
    type: string;
    industry: string;
    service: string | null;
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string | null;
    businessNum: string | null;
    fcmToken: string | null;
    addr1: string | null;
    addr2: string | null;
    sido: string | null;
    sigungu: string | null;
    addrX: string | null;
    addrY: string | null;
    point: number | null;
    jday: string;
};

export interface UserWithP extends User {
    pw: string;
    childCount: number;
    descendantCount: number;
    activeOrderCount: number;
    payReadyCount: number;
};

export interface Minion extends RowDataPacket {
    parentSeq: number;
    parentName: string;
    childSeq: number;
    childName: string;
};
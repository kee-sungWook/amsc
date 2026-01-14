import { RowDataPacket } from "mysql2";

export interface Order extends RowDataPacket {
    seq: number;
    requester: number;
    userName: string;
    userPhone: string;
    industry: string;
    service: string | null;
    title: string;
    num: string;
    confirm: number;
    situation: string;
    worker: number | null;
    detail: string;
    price: number;
    sido: string;
    sigungu: string;
    addr1: string;
    img: string | null;
    wday: string;
    fday: string | null;
}

export interface OrderWithWorker extends Order {
    workerCompany: string | null;
    workerPhone: string | null;
}

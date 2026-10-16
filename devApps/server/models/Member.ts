import { RowDataPacket } from "mysql2";

export interface Member extends RowDataPacket {
    seq: number;
    industry: string | null;
    service: string | null;
    id: string;
    pw: string;
    name: string;
    email: string | null;
    phone: string;
    company: string | null;
    businessNum: string | null;
    addr1: string | null;
    addr2: string | null;
    feeRate: FeeRateModel[] | null;
    local: LocalModel[] | null;
    jday: string;
}

export interface FeeRateModel {
    seq: number;
    memSeq: number;
    feeName: string;
    feeRate: number;
}

export interface LocalModel {
    seq: number;
    memSeq: number;
    localName: string;
    localCode: string;
}
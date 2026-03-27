import { RowDataPacket } from "mysql2";

export interface Member extends RowDataPacket {
    seq: number;
    industry: string;
    service: string;
    id: string;
    pw: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    businessNum: string;
    addr1: string;
    addr2: string;
    feeRate: FeeRateModel[];
    local: LocalModel[];
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
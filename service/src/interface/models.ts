export interface QnaType {
    seq: number;
    title: string;
    question: string;
    answer: string | null;
    pic: string | null;
    writer: number;
    wday: string;
    aday: string | null;
}

export interface User {
    seq: number;
    type: string;
    industry: string;
    service: string | undefined | null;
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string | undefined | null;
    businessNum: string | undefined | null;
    fcmToken: string | undefined | null;
    addr1: string | undefined | null;
    addr2: string | undefined | null;
    sido: string | undefined | null;
    sigungu: string | undefined | null;
    addrX: string | undefined | null;
    addrY: string | undefined | null;
    point: number | undefined | null;
    jday: string;
}

export interface UserWithP extends User {
    pw: string;
    childCount: number;
    descendantCount: number;
    activeOrderCount: number;
    payReadyCount: number;
}

export interface DummyUser {
    name: string | undefined;
    phone: string | undefined;
}

export interface Minion {
    parentSeq: number;
    parentName: string;
    childSeq: number;
    childName: string;
};

export interface AddrData {
    addr?: string;
    sub?: string;
    zoneCode?: string;
    bCode?: string;
}

export interface Fxrt {
    차종: string;
    차량번호: string;
    보험접수번호: string;
    과실비율: string;
};

export interface De {
    차량번호: string;
    예약시간: string;
    출발지연락처: string;
    출발지주소: string;
    도착지연락처: string;
    도착지주소: string;
    결재방식: string;
};

export interface SidogunguVal {
    sido: string;
    sigungu: string;
};

export interface Order {
    seq: number;
    requester: number;
    userName: string;
    userPhone: string;
    industry: string;
    service: string | null;
    title: string;
    num: string;
    confirm: 0 | 1;
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
    point: number | null;
    payOk: number;
    taxInvoice: string | null;
    deposit: string | null;
};
export interface OrderWithWorker extends Order {
    workerCompany: string | null;
    workerPhone: string | null;
};
export interface OrderWithPoint extends OrderWithWorker {
    requesterName: string | null;
    requesterPhone: string | null;

};

export interface PointLog {
    seq: number;
    userSeq: number;
    utilize: string;
    subject: string;
    amount: number;
    balance: number;
    wday: string;
    eday: string | null;
};

export interface Withdrawal extends PointLog {
    name: string;
    owner: string;
    bankName: string;
    accountNum: string;
}


export interface TreeNode {
    id: number;
    name: string;
    depth: number;
    children: TreeNode[];
}


export interface MemberModel {
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

export type Region = { code: string, name: string };
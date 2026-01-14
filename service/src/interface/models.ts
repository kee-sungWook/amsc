export interface QnaType {
    seq: number;
    title: string;
    question: string;
    answer: string | null;
    pic: string | null;
    writer: number;
    wday: string;
}

export interface User {
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

export interface DummyUser {
    name: string | undefined;
    phone: string | undefined;
}

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
    company: string | null;
    companyPhone: string | null;
}
export interface OrderWithWorker extends Order {
    workerCompany: string | null;
    workerPhone: string | null;
}

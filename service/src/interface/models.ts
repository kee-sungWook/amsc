export interface Notice {
    seq: number;
    title: string;
    body: string | null;
    pic: string | null;
    writer: string;
    wday: string;
}

export interface User {
    seq: number;
    memType: string;
    manager: number;
    id: string;
    email: string;
    phone: string;
    jday: string;
}
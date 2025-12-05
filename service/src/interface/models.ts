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
    type: string;
    manager: number;
    id: string;
    name: string;
    email: string;
    phone: string;
    jday: string;
}
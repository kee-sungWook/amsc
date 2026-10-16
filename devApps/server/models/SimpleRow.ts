import { RowDataPacket } from "mysql2";

export interface SimpleRow<T> extends RowDataPacket { }

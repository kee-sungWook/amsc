export const SERVICE_LIST = ["FX", "RT", "DE"] as const;
export type AllowServiceVal = "all" | typeof SERVICE_LIST[number];
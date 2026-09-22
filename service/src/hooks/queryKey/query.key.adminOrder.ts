export const qKeyAdminOrder = {
    getAdminOrders: (page: number, situation: string) => ["getAdminOrder", page, situation],
    getAdminCancelReqOrder: (page: number, situation: string) => ["getAdminCancelReqOrder", page, situation]
};

export const qKeyAdminIndustry = {
    getIndustries: () => ["getIndustries"],
    getServices: (parentCode: string) => ["getIndustryServices", parentCode]
};

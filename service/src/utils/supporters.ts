import type { Minion, TreeNode } from "@interface/models";

export function formatDate(dateStr: string): string {
    if (dateStr === '') return '';

    const date = new Date(dateStr);
    const today = new Date();
    const isToday =
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();

    if (isToday) {
        return `오늘 ${date.toTimeString().slice(0, 5)}`;
    } else {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    }
}

export function formatDateTime(dateStr: string): string {
    if (dateStr === '') return '';

    const date = new Date(dateStr);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    const HH = String(date.getHours());
    const mm = String(date.getMinutes());
    const ss = String(date.getSeconds());
    return `${y}-${m}-${d} ${HH}:${mm}:${ss}`;
}

export function makeOrderNum(): string {
    const now = new Date();
    const YY = String(now.getFullYear()).slice(-2);
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    const HH = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const ms = String(now.getMilliseconds()).padStart(3, '0');
    return `${YY}${MM}${DD}-${HH}${mm}${ss}-${ms}`;
}

export function currencyComma(num: number) {
    return new Intl.NumberFormat("ko-KR").format(num);
}


export function decodeIndustry(code: string): string {
    let val = ''
    if (code === "FX") val = "정비";
    if (code === "RT") val = "렌트";
    if (code === "DE") val = "탁송";
    return val;
}
export function decodeType(code: string): string {
    let val = ''
    if (code === "y") val = "영업자";
    if (code === "b") val = "업체";
    if (code === "c") val = "운전자";
    return val;
}

export function buildUserTree(data: Minion[], rootId: number): TreeNode | null {
    const nodeMap = new Map<number, TreeNode>();
    // 모든노드생성
    for (const el of data) {
        if (!nodeMap.has(el.parentSeq)) nodeMap.set(el.parentSeq, { id: el.parentSeq, name: el.parentName, depth: 0, children: [] });
        if (!nodeMap.has(el.childSeq)) nodeMap.set(el.childSeq, { id: el.childSeq, name: el.childName, depth: 0, children: [] });
    }
    // console.log(`buildTree step1:`);
    // nodeMap.forEach((value, key) => {
    //     console.log(`Key: ${key}, Value: ${JSON.stringify(value)}`);
    // });
    // 부모 -> 자식 연결
    for (const el of data) {
        const parent = nodeMap.get(el.parentSeq)!;
        const child = nodeMap.get(el.childSeq)!;
        parent.children.push(child);
    }
    // console.log(`buildTree step2:`);
    // nodeMap.forEach((value, key) => {
    //     console.log(`Key: ${key}, Value: ${JSON.stringify(value)}`);
    // });

    // depth 계산 (DFS)
    const setDepth = (node: TreeNode, depth: number) => {
        node.depth = depth;
        node.children.forEach(child => setDepth(child, depth + 1));
    };
    const root = nodeMap.get(rootId)!;
    setDepth(root, 0);
    return root;
}
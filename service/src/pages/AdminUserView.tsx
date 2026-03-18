import "@scss/pages/_adminUsers.scss";
import LoadingIndicator from "@components/LoadingIndicator";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { buildUserTree, currencyComma, decodeIndustry, decodeType, formatDateTime } from "@utils/supporters";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa6";
import type { Minion, TreeNode } from "@interface/models";

const TreeView: React.FC<{ node: TreeNode }> = ({ node }) => {
    return (
        <li className="tree-node">
            <div className={`node-content descendant-${node.depth}`}><span className="node-label">{node.name}</span></div>
            {node.children.length > 0 && (
                <ul className="tree-children">
                    {node.children.map(child => (
                        <TreeView key={child.id} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
}

const AdminUserView: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [descendantMode, setDescendantMode] = React.useState<boolean>(false);
    const [tree, setTree] = React.useState<TreeNode | null>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const userData = location.state;

    React.useEffect(() => {
        if (!userData) return;
        const getMinion = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/user/getMinion/${userData.seq}`);
                const result = await res.json();
                if (!result.success) throw new Error(result.message);
                const data: Minion[] = result.message as Minion[];
                const buildTree = buildUserTree(data, userData.seq);
                setTree(buildTree);
            } catch (err) {
                console.error(`getMinion err ${err}`);
            } finally {
                setLoading(false);
            }
        };
        getMinion();
    }, []);

    return (
        <>
            <article className="admin-user-view">
                <h3 className="user-title">
                    <FaAngleLeft className="icon" onClick={() => {
                        descendantMode ? setDescendantMode(false) : navigate("/admin/users");
                    }} />
                    AMS Admin 가입자 현황
                    <FaAngleLeft className="icon" />
                </h3>
                {loading
                    ? <LoadingIndicator />
                    : <>
                        {descendantMode
                            ? <>
                                <section className="main-container">
                                    {!tree
                                        ? <div className="nodata">no data</div>
                                        : <ul className="tree"><TreeView node={tree} /></ul>}
                                </section>
                                <button className="goList" onClick={() => setDescendantMode(false)}>닫기</button>
                            </>
                            : <>
                                <section className="main-container">
                                    <div>유저타입 :<span>{decodeType(userData.type)}</span></div>
                                    <div>업종 :<span>{decodeIndustry(userData.industry)}</span></div>
                                    <div>ID :<span>{userData.id}</span></div>
                                    <div>PW :<span>{userData.pw}</span></div>
                                    <div>이름 :<span>{userData.name}</span></div>
                                    <div>업체명 :<span>{userData.company || ''}</span></div>
                                    <div>주소 :<span>{userData.addr1 || ''} {userData.addr2 || ''}</span></div>
                                    <div>가입일자 :<span>{formatDateTime(userData.jday)}</span></div>
                                    {userData.type !== "b" &&
                                        <>
                                            <div>포인트 :
                                                <span className="red">{currencyComma(userData.point || 0)}</span>
                                                <span className="pt">pt</span>
                                                <button type="button" className="red">캐시지급</button>
                                                <button type="button" onClick={() => navigate("/admin/userPoint", { state: userData })}>포인트 로그</button>
                                            </div>
                                            <div className="flexType">주문현황 :
                                                <section className="pannel">
                                                    <div>
                                                        <p>대기 및 진행중 <span>{userData.activeOrderCount}</span></p>
                                                        <p>포인트 입금 대기중 <span>{userData.payReadyCount}</span></p>
                                                    </div>
                                                    <button type="button" onClick={() => navigate("/admin/userOrder", { state: userData })}>
                                                        <PiMagnifyingGlassBold className="icon" />상세보기
                                                    </button>
                                                </section>
                                            </div>
                                            <div className="flexType">자손현황 :
                                                <section className="pannel">
                                                    <div>
                                                        <p>직속 영업자 <span>{userData.childCount}</span></p>
                                                        <p>네트워크 영업자 <span>{userData.descendantCount}</span></p>
                                                    </div>
                                                    <button type="button" onClick={() => setDescendantMode(true)}><PiMagnifyingGlassBold className="icon" />상세보기</button>
                                                </section>
                                            </div>
                                        </>}
                                </section>
                                <button className="goList" onClick={() => navigate("/admin/users")}>목록보기</button>
                            </>
                        }
                    </>
                }
            </article>
        </>
    );
}

export default AdminUserView;
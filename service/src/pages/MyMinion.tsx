import "@scss/pages/_myminion.scss";
import React from "react";
import Header from "@components/Header";
import { useUserStore } from "@store/publicState";
import LoadingIndicator from "@components/LoadingIndicator";
import type { Minion, TreeNode } from "@interface/models";
import { useLocation } from "react-router-dom";
import { buildUserTree } from "@utils/supporters";


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

const MyMinion: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { user } = useUserStore();
    const location = useLocation();
    const [tree, setTree] = React.useState<TreeNode | null>(null);
    const myDescendant: Record<string, any> = location.state;

    React.useEffect(() => {
        if (!user) return;
        const getMinion = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/user/getMinion/${user.seq}`);
                const result = await res.json();
                if (!result.success) throw new Error(result.message);
                const data: Minion[] = result.message as Minion[];
                const buildTree = buildUserTree(data, user.seq);
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
            <Header />
            <article className="mainContainer my-minion">
                <section className="top">
                    <img src='/img/titlePic_myMinion.png' alt='myPoint Illustration' />
                    <div className="top-txt">
                        <div className='title'>
                            <span>My</span> Minions
                        </div>
                        <div className="content">
                            <p>직속<span>{myDescendant.length > 0 ? myDescendant.filter((list: any) => list.depth === 1).length : 0}</span></p>
                            <p>네트워크<span>{myDescendant.length > 0 ? myDescendant.filter((list: any) => list.depth !== 1).length : 0}</span></p>
                        </div>
                    </div>
                </section>

                <section className="main-content">
                    {loading
                        ? <LoadingIndicator size={120} />
                        : !tree
                            ? <div className="nodata">no data</div>
                            : <ul className="tree"><TreeView node={tree} /></ul>
                    }
                </section>
            </article>
        </>
    );
}

export default MyMinion;
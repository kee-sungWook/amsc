import "@scss/pages/_cc.scss";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CCoption = () => {
    const navigate = useNavigate();
    const parentRef = useRef<HTMLElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleIframe = () => {
            const pWidth = parentRef.current?.getBoundingClientRect().width;
            if (pWidth) {
                const scaleVal = pWidth / 2560;
                iframeRef.current!.style.transform = `scale(${scaleVal})`
            }
        }
        window.addEventListener('resize', handleIframe);
        return () => window.removeEventListener('resize', handleIframe);
    }, []);

    return (
        <article className="counselPage">
            <section>
                <div onClick={() => navigate("/main")}><img src="/img/cc_back.png" /></div>
                <p>
                    <span>Counsel Content</span>
                    <span>옵션가이드</span>
                </p>
                <div></div>
            </section>
            <section ref={parentRef} style={{ background: "white" }}>
                <iframe ref={iframeRef} src={`${import.meta.env.VITE_SITE_URL}/static/op/main.html`} />
            </section>
        </article>
    );
};

export default CCoption;

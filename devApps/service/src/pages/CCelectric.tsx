import "@scss/pages/_cc.scss";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CCelectric = () => {
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
        handleIframe();
        window.addEventListener('resize', handleIframe);
        return () => window.removeEventListener('resize', handleIframe);
    }, []);

    return (
        <article className="counselPage">
            <section>
                <div onClick={() => navigate("/main")}><img src="/img/cc_back.png" /></div>
                <p>
                    <span>Counsel Content</span>
                    <span>전자제어</span>
                </p>
                <div></div>
            </section>
            <section ref={parentRef}>
                <iframe ref={iframeRef} src={`${import.meta.env.VITE_SITE_URL}/static/cc/electric_00.html`} />
            </section>
        </article>
    );
};

export default CCelectric;

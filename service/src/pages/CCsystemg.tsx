import "@scss/pages/_ccSystemg.scss";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CCsystemg = () => {
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
                <div onClick={() => navigate("/")}><img src="/img/cc_back.png" /></div>
                <p>
                    <span>Counsel Content</span>
                    <span>시스템 가이드</span>
                </p>
                <div></div>
            </section>
            <section ref={parentRef}>
                <iframe ref={iframeRef} src="https://amsk.kr/cc/systemg_00.html" />
            </section>
        </article>
    );
};

export default CCsystemg;

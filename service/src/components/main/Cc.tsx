import "@scss/components/_cc.scss";
import { useNavigate } from "react-router-dom";

const Cc = () => {
	const navigate = useNavigate();
	return (
		<article className='cc'>
			<div className='container'>
				<section className='txtArea'>
					<div><span>Counsel</span> Contents</div>
					<span>전자제어 시스템부터 소모품까지 완벽 안내</span>
				</section>
				<section className='menuArea'>
					<figure onClick={() => navigate("/cc/common")}>
						<img src='/img/cc_con1.png' />
						<figcaption>일반정비</figcaption>
					</figure>
					<figure onClick={() => navigate("/cc/electric")}>
						<img src='/img/cc_con2.png' />
						<figcaption>전자제어</figcaption>
					</figure>
					<figure onClick={() => navigate("/cc/systemg")}>
						<img src='/img/cc_con3.png' />
						<figcaption>시스템가이드</figcaption>
					</figure>
					<figure onClick={() => navigate("/cc/prevent")}>
						<img src='/img/cc_con4.png' />
						<figcaption>예방정비</figcaption>
					</figure>
					<figure onClick={() => navigate("/cc/option")}>
						<img src='/img/cc_con5.png' />
						<figcaption>옵션가이드</figcaption>
					</figure>
				</section>
			</div>
		</article>
	);
}

export default Cc;

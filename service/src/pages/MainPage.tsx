import Header from "@components/Header";
import Intrance from "@components/Intrance";
import Estimator from "@components/Estimator";
import Services from "@components/Services";
import Howuse from "@components/Howuse";
import Findfix from "@components/Findfix";
import Taksong from "@components/Taksong";
import Footer from "@components/Footer";
import Rent from "@components/Rent";
import Cc from "@components/Cc";
import NoticeWindow from "@components/NoticeWindow.tsx"
import { usePublicState } from "@store/publicState.ts";
const MainPage: React.FC = () => {
    const { noticeOn, user } = usePublicState();

    async function insertData(noticeTitle: string, noticeContent: string) {
        try {
            const response = await fetch("/api/notice/insertNotice", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: noticeTitle,
                    content: noticeContent,
                    writer: user?.email.split("@").shift() ?? 'GUEST'
                }),
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            alert("문의사항이 등록되었습니다.");
        } catch (error) {
            console.error(`[NoticeWindow insertNotice Error] ${error}`);
        }
    }

    return (
        <>
            <Header />
            <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "50px 3% 0" }}>
                <Intrance />
                <Estimator />
                <Services />
                <Cc />
                <Howuse />
                <Findfix />
                <Taksong />
                <Rent />
            </div>
            <Footer />
            {noticeOn && <NoticeWindow insertData={insertData} />}
        </>
    );
};

export default MainPage;

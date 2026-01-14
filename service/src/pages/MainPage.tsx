import Header from "@components/Header";
import Intrance from "@components/main/Intrance";
import Services from "@components/main/Services";
import Howuse from "@components/main/Howuse";
import Findfix from "@components/main/Findfix";
import Taksong from "@components/main/Taksong";
import Footer from "@components/Footer";
import Rent from "@components/main/Rent";
import Cc from "@components/main/Cc";
// import QnaWindow from "@components/QnaWindow";
// import { usePublicState, useUserStore } from "@store/publicState";
import React from "react";

const MainPage: React.FC = () => {
    // const { qnaOn } = usePublicState();
    // const { user } = useUserStore();

    // async function insertData(qnaTitle: string, qnaContent: string) {
    //     try {
    //         const response = await fetch("/api/notice/insertNotice", {
    //             method: "post",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 title: qnaTitle,
    //                 content: qnaContent,
    //                 writer: user?.email.split("@").shift() ?? 'GUEST'
    //             }),
    //         });
    //         const result = await response.json();
    //         if (!result.success) throw new Error(result.message);
    //         alert("문의사항이 등록되었습니다.");
    //     } catch (error) {
    //         console.error(`[NoticeWindow insertNotice Error] ${error}`);
    //     }
    // }

    return (
        <>
            <Header />
            <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "100px 3% 0" }}>
                <Intrance />
                {/* <Estimator /> */}
                <Services />
                <Rent />
                <Cc />
                <Howuse />
                <Findfix />
                <Taksong />
            </div>
            <Footer />
            {/* {qnaOn && <QnaWindow insertData={insertData} />} */}
        </>
    );
};

export default MainPage;

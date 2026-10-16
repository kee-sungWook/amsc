import Header from "@components/Header";
import Intrance from "@components/main/Intrance";
import Services from "@components/main/Services";
import Howuse from "@components/main/Howuse";
import Findfix from "@components/main/Findfix";
import Taksong from "@components/main/Taksong";
import Footer from "@components/Footer";
import Rent from "@components/main/Rent";
import Cc from "@components/main/Cc";
import React from "react";

const MainPage: React.FC = () => {

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

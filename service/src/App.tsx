import "@scss/app.scss";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CCsystemg from "@pages/CCsystemg";
import NoticePage from "@pages/NoticePage";
import ServiceApply from "@pages/ServiceApply";
import Intro from "@pages/Intro";
import Login from "@pages/Login";
import Join from "@pages/Join";
import RentalCar from "@pages/RentalCar";
import LogSuggest from "@pages/LogSuggest";

function MyRoute() {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/suggest" element={<LogSuggest />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/service" element={<ServiceApply />} />
            <Route path="/rental" element={<RentalCar />} />
            <Route path="/cc/common" element={<CCsystemg />} />
            <Route path="/cc/electric" element={<CCsystemg />} />
            <Route path="/cc/systemg" element={<CCsystemg />} />
            <Route path="/cc/prevent" element={<CCsystemg />} />
            <Route path="/cc/option" element={<CCsystemg />} />
        </Routes>
    );
}

function App() {
    return <MyRoute />;
}

export default App;

import "@scss/app.scss";
import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CCsystemg from "@pages/CCsystemg";
import ServiceApply from "@pages/ServiceApply";
import Intro from "@pages/Intro";
import Login from "@pages/Login";
import Join from "@pages/Join";
import RentalCar from "@pages/RentalCar";
import LogSuggest from "@pages/LogSuggest";
import { useUserStore } from "@store/publicState";
import MyPage from "@pages/MyPage";
import JoinNetwork from "@pages/JoinNetwork";
import MyOrder from "@pages/MyOrder";
import JoinBusiness from "@pages/JoinBusiness";
import Qna from "@pages/Qna";

function PrivateRoute() {
    const location = useLocation();
    const { loggedIn } = useUserStore();
    return loggedIn ? <Outlet /> : <Navigate to="/suggest" state={{ from: location.pathname }} replace />;
}

function MyRoute() {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="intro" element={<Intro />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
            <Route path="joinNetwork/:manager" element={<JoinNetwork />} />
            <Route path="joinBusiness" element={<JoinBusiness />} />
            <Route path="suggest" element={<LogSuggest />} />
            <Route path="main" element={<MainPage />} />
            <Route path="cc/common" element={<CCsystemg />} />
            <Route path="cc/electric" element={<CCsystemg />} />
            <Route path="cc/systemg" element={<CCsystemg />} />
            <Route path="cc/prevent" element={<CCsystemg />} />
            <Route path="cc/option" element={<CCsystemg />} />
            <Route element={<PrivateRoute />}>
                <Route path="notice" element={<Qna />} />
                <Route path="service" element={<ServiceApply />} />
                <Route path="rental" element={<RentalCar />} />
                <Route path="mypage" element={<MyPage />} />
                <Route path="myOrder" element={<MyOrder />} />
            </Route>
        </Routes>
    );
}

function App() {
    return <MyRoute />;
}

export default App;

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
import AdminLayout from "@pages/AdminLayout";
import AdminLogin from "@pages/AdminLogin";
import AdminUsers from "@pages/AdminUsers";
import AdminOrders from "@pages/AdminOrders";
import AdminHome from "@pages/AdminHome";
import MyPoint from "@pages/MyPoint";
import MyMinion from "@pages/MyMinion";
import Test from "@pages/Test";
import AdminUserView from "@pages/AdminUserView";
import AdminUserPoint from "@pages/AdminUserPoint";
import AdminUserOrders from "@pages/AdminUserOrders";
import AdminQna from "@pages/AdminQna";
import AdminWithdrawal from "@pages/AdminWithdrawal";
import AdminRemittance from "@pages/AdminRemittance";
import AdminMembers from "@pages/AdminMembers"
import AdminMemberView from "@pages/AdminMemberView";
import CCcommon from "@pages/CCcommon";
import CCelectric from "@pages/CCelectric";
import CCprevent from "@pages/CCprevent";
import CCoption from "@pages/CCoption";
const PrivateRoute: React.FC = () => {
    const { loggedIn } = useUserStore();
    const location = useLocation();
    return loggedIn ? <Outlet /> : <Navigate to="/suggest" state={{ from: location.pathname }} replace />;
}

const AdminRoute: React.FC = () => {
    return <Outlet />
    // return (logOk && user?.type === 'a') ? <Outlet /> : <Navigate to="admin/login" />;
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
            <Route path="cc/common" element={<CCcommon />} />
            <Route path="cc/electric" element={<CCelectric />} />
            <Route path="cc/systemg" element={<CCsystemg />} />
            <Route path="cc/prevent" element={<CCprevent />} />
            <Route path="cc/option" element={<CCoption />} />
            <Route element={<PrivateRoute />}>
                <Route path="notice" element={<Qna />} />
                <Route path="service" element={<ServiceApply />} />
                <Route path="rental" element={<RentalCar />} />
                <Route path="mypage" element={<MyPage />} />
                <Route path="myOrder" element={<MyOrder />} />
                <Route path="myPoint" element={<MyPoint />} />
                <Route path="myMinion" element={<MyMinion />} />
            </Route>

            <Route path="admin" element={<AdminRoute />}>
                <Route index element={<AdminLogin />} />
                <Route path="login" element={<AdminLogin />} />
                <Route element={<AdminLayout />}>
                    <Route path="home" element={<AdminHome />} />
                    <Route path="users" element={<AdminUsers />} />
                    <Route path="userView" element={<AdminUserView />} />
                    <Route path="members" element={<AdminMembers />} />
                    <Route path="memberView" element={<AdminMemberView />} />
                    <Route path="userPoint" element={<AdminUserPoint />} />
                    <Route path="userOrder" element={<AdminUserOrders />} />
                    <Route path="orders" element={<AdminOrders />} />
                    <Route path="qna" element={<AdminQna />} />
                    <Route path="withdrawal" element={<AdminWithdrawal />} />
                    <Route path="remittance" element={<AdminRemittance />} />
                    <Route path="test" element={<Test />} />
                </Route>
            </Route>
        </Routes>
    );
}

function App() {
    return <MyRoute />;
}

export default App;

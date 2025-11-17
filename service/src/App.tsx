import "@scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CCsystemg from "@pages/CCsystemg";
import NoticePage from "@pages/NoticePage";

function MyRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/notice" element={<NoticePage />} />
                <Route path="/cc/common" element={<CCsystemg />} />
                <Route path="/cc/electric" element={<CCsystemg />} />
                <Route path="/cc/systemg" element={<CCsystemg />} />
                <Route path="/cc/prevent" element={<CCsystemg />} />
                <Route path="/cc/option" element={<CCsystemg />} />
            </Routes>
        </BrowserRouter>
    );
}

function App() {
    return <MyRoute />;
}

export default App;

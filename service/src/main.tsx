import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import GlobalModal from "@components/modal/GlobalModal.tsx";
import Providers from "./providers/Providers.tsx";

// import { initPwaInstall } from "./pwaInstall";

// initPwaInstall();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <App />
            <GlobalModal />
        </Providers>
    </StrictMode>
);

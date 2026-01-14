import { Router } from "express";
import qnaRouter from "@routes/qnaRouter.js";
import userRouter from "@routes/userRouter.js";
import orderRouter from "@routes/orderRouter.js";

const apiRouter = Router();

const routeModules: { path: string, router: Router }[] = [
    { path: "/qna", router: qnaRouter },
    { path: "/user", router: userRouter },
    { path: "/order", router: orderRouter },
];

routeModules.forEach((route) => apiRouter.use(route.path, route.router))

export default apiRouter;

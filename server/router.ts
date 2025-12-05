import { Router } from "express";
import noticeRouter from "@routes/noticeRouter.js";
import userRouter from "@routes/userRouter.js";
import memberRouter from "@routes/memberRouter.js";

const apiRouter = Router();

const routeModules: { path: string, router: Router }[] = [
    { path: "/notice", router: noticeRouter },
    { path: "/user", router: userRouter },
    { path: "/member", router: memberRouter },
];

routeModules.forEach((route) => apiRouter.use(route.path, route.router))

export default apiRouter;
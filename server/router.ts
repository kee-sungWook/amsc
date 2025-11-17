import { Router } from "express";
import noticeRouter from "@routes/noticeRouter.js";

const apiRouter = Router();

const routeModules: { path: string, router: Router }[] = [
    { path: "/notice", router: noticeRouter },
];

routeModules.forEach((route) => apiRouter.use(route.path, route.router))

export default apiRouter;
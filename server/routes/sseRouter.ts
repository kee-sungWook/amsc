import { Router } from "express";
import * as sseController from "@controllers/sseController.js";

const router = Router();

router.get('/adminSseConnect', sseController.adminSseConnect);
router.get('/adminSseFirstReceive', sseController.adminSseFirstReceive);


export default router;
import { Router } from "express";
import * as noticeController from "@controllers/noticeController.js";
const router = Router();

router.get('/getNotice', noticeController.getNotice);
router.post('/insertNotice', noticeController.insertNotice);


export default router;
import { Router } from "express";
import * as qnaController from "@controllers/qnaController.js";
const router = Router();

router.get('/getQna/:seq', qnaController.getQna);
router.post('/insertQna', qnaController.insertQna);
router.post('/answer', qnaController.updateAnswer);


export default router;

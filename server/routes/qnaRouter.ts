import { Router } from "express";
import * as qnaController from "@controllers/qnaController.js";
const router = Router();

router.get('/getQna/:seq', qnaController.getQna);
router.get('/getQnaAll', qnaController.getQnaAll);
router.post('/insertQna', qnaController.insertQna);
router.post('/updateAnswer', qnaController.updateAnswer);


export default router;

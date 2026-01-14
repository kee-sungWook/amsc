import { Router } from "express";
import * as orderController from "@controllers/orderController.js";
import { uploadModule } from "@utils/multer.js";

const router = Router();

router.post("/insertOrder", orderController.insertOrder);
router.post("/updateOrder", uploadModule.single("img"), orderController.updateOrder);
router.get("/getOrderForC/:userSeq", orderController.getOrderForC);
router.get("/getOrderForB/:bseq/:industry/:sido/:sigungu", orderController.getOrderForB);
router.get("/deleteOrder/:orderSeq", orderController.deleteOrder);

export default router;

import { Router } from "express";
import * as orderController from "@controllers/orderController.js";
import { uploadModule } from "@utils/multer.js";

const router = Router();

router.post("/insertOrder", orderController.insertOrder);
router.post("/updateOrder", uploadModule.single("img"), orderController.updateOrder);
router.post("/updatePoint", orderController.updatePoint);
router.post("/payPoint", orderController.payPoint);

router.get("/getOrderForC/:userSeq", orderController.getOrderForC);
router.get("/getOrderForB/:bseq/:industry/:sido/:sigungu", orderController.getOrderForB);
router.get("/deleteOrder/:orderSeq", orderController.deleteOrder);
router.get("/getAllOrders", orderController.getAllOrders);

router.get("/getOrderForAdmin", orderController.getOrderForAdmin);

router.post("/deleteOrder", orderController.deleteOrder);
router.post("/taxInvoice", orderController.taxInvoice);
router.post("/deposit", orderController.deposit);

export default router;


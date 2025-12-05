import { Router } from "express";
import * as memberController from "@controllers/memberController.js";

const router = Router();

router.get("/checkValid/:memberId", memberController.checkValid);
router.post("/signIn", memberController.signIn);
router.post("/join", memberController.join);

export default router;
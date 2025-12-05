import { Router } from "express";
import * as userController from "@controllers/userController.js";

const router = Router();

router.get("/checkValid/:userId", userController.checkValid);
router.post("/signIn", userController.signIn);
router.post("/join", userController.join);

export default router;
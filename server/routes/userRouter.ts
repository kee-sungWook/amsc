import { Router } from "express";
import * as userController from "@controllers/userController.js";

const router = Router();

router.get("/checkValid/:userId", userController.checkValid);
router.post("/signIn", userController.signIn);
router.post("/join", userController.join);
router.post("/joinNetwork", userController.joinNetwork);
router.post("/joinBusiness", userController.joinBusiness);
router.post("/updateField", userController.updateField);

export default router;

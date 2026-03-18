import { Router } from "express";
import * as userController from "@controllers/userController.js";

const router = Router();

router.get("/checkValid/:userId", userController.checkValid);
router.post("/signIn", userController.signIn);
router.post("/join", userController.join);
router.post("/joinNetwork", userController.joinNetwork);
router.post("/joinBusiness", userController.joinBusiness);
router.post("/updateField", userController.updateField);
router.get("/getAllUsers", userController.getAllUsers);
router.get("/getPoint/:userSeq", userController.getPoint);
router.get("/getPointLog/:userSeq", userController.getPointLog);
router.get("/getDescendant/:userSeq", userController.getDescendant);
router.get("/getMinion/:userSeq", userController.getMinion);
router.post("/registerBank", userController.registerBank);
router.get("/getBankAccount/:userSeq", userController.getBankAccount);
router.post("/withdrawalReq", userController.withdrawalReq);
router.get("/getWithdrawalReq", userController.getWithdrawalReq);
router.post("/withdrawalAccept", userController.withdrawalAccept);
router.get("/getRemittance", userController.getRemittance);

export default router;

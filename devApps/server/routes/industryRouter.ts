import { Router } from "express";
import * as industryController from "@controllers/industryController.js";
import { uploadMemoryImage } from "@utils/multer.js";

const router = Router();

router.get("/getIndustries", industryController.getIndustries);
router.post("/insertIndustry", uploadMemoryImage.single("icon"), industryController.insertIndustry);
router.patch("/updateIndustry/:seq", uploadMemoryImage.single("icon"), industryController.updateIndustry);

export default router;

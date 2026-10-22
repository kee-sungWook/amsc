import { Router } from "express";
import * as industryController from "@controllers/industryController.js";
import { uploadMemoryImage } from "@utils/multer.js";

const router = Router();

router.get("/getIndustries", industryController.getIndustries);
router.get("/getServices/:parentCode", industryController.getServices);
router.post("/insertIndustry", uploadMemoryImage.single("icon"), industryController.insertIndustry);
router.patch("/updateIndustry/:seq", uploadMemoryImage.single("icon"), industryController.updateIndustry);
router.post("/insertService", uploadMemoryImage.single("icon"), industryController.insertService);
router.patch("/updateService/:seq", uploadMemoryImage.single("icon"), industryController.updateService);

export default router;

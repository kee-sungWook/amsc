import { Router } from 'express';
import * as memberController from '@controllers/memberController.js';
const router = Router()

router.post("/memberLogin", memberController.adminLogin);

export default router;
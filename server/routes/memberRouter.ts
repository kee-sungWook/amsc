import { Router } from 'express';
import * as memberController from '@controllers/memberController.js';
const router = Router()

router.post("/memberLogin", memberController.adminLogin);

router.get("/getMembers",
    async (req, res, next) => {
        try {
            const result = await memberController.getMembers();
            res.status(200).json(result);
        } catch (err) { next(err) }
    }
);

router.put("/insertMemLocal",
    async (req, res, next) => {
        try {
            const result = await memberController.insertMemLocal(req.body);
            res.status(201).json(result);
        } catch (err) { next(err) }
    }
)

export default router;
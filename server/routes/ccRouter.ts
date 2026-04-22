import express from 'express';
import * as ccController from '@controllers/ccController.js';

const router = express.Router();

router.post("/getCCdatas",
    async (req, res, next) => {
        try {
            const result = await ccController.getCCdatas(req.body);
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);
router.post("/getSystemG",
    async (req, res, next) => {
        console.log(`getSystemG router`);
        console.log(req.body);
        try {
            const result = await ccController.getSystemG(req.body);
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);
router.post("/getOp",
    async (req, res, next) => {
        try {
            const result = await ccController.getOp(req.body);
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);

export default router;
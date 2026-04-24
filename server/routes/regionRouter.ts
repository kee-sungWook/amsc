import express from 'express';
import * as regionController from '@controllers/regjonController.js';

const router = express.Router();

router.get("/getSido",
    async (req, res, next) => {
        try {
            const result = await regionController.getSido();
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);

router.get("/getSigungu/:pcode",
    async (req, res, next) => {
        try {
            const { pcode } = req.params
            const result = await regionController.getSigungu(pcode);
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);

export default router;
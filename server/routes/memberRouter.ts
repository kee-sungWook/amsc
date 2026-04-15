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


router.get("/getMemberBySeq/:memSeq",
    async (req, res, next) => {
        try {
            const memSeq = req.params;
            const memSeqNum = Number(memSeq);
            const result = await memberController.getMemberBySeq(memSeqNum);
            res.status(200).json(result);
        } catch (err) { next(err) }
    }
);


router.get("/getMemFeeRates/:memSeq",
    async (req, res, next) => {
        try {
            const memSeq = req.params;
            const memSeqNum = Number(memSeq);
            const result = await memberController.getMemFeeRates(memSeqNum);
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);


router.put("/insertMemFeeRate",
    async (req, res, next) => {
        try {
            const result = await memberController.insertMemFeeRate(req.body);
            res.status(201).json(result);
        } catch (err) { next(err) }
    }
);


router.delete("/deleteMemFeeRate/:seq",
    async (req, res, next) => {
        try {
            const { seq } = req.params;
            const seqNum = Number(seq);
            console.log("deleteMemFeeRate called with seq:", seqNum); // 디버깅 로그 추가
            const result = await memberController.deleteMemFeeRate(seqNum);
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);


router.put("/insertMemLocal",
    async (req, res, next) => {
        try {
            const result = await memberController.insertMemLocal(req.body);
            res.status(201).json(result);
        } catch (err) { next(err) }
    }
);

export default router;
import { Router } from 'express';
import * as memberController from '@controllers/memberController.js';
const router = Router()

router.get("/checkValid/:memId", memberController.checkValid);
router.post("/memberLogin", memberController.adminLogin);
router.post("/signIn", memberController.signIn);
router.post("/join", memberController.join)


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

router.patch("/updateMemFeeRate",
    async (req, res, next) => {
        try {
            const result = await memberController.updateMemFeeRate(req.body);
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);


router.delete("/deleteMemFeeRate/:seq",
    async (req, res, next) => {
        try {
            const { seq } = req.params;
            const seqNum = Number(seq);
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


router.patch("/updateMemLocal",
    async (req, res, next) => {
        try {
            const result = await memberController.updateMemLocal(req.body);
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);


router.delete("/deleteMemLocal/:seq",
    async (req, res, next) => {
        try {
            const { seq } = req.params;
            const seqNum = Number(seq);
            const result = await memberController.deleteMemLocal(seqNum);
            res.status(200).json(result);
        } catch (err) { next(err); }
    }
);

export default router;
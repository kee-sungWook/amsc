import { Request, Response } from "express";
import * as svc from "@svc/svc.industry.js";

export async function getIndustries(_req: Request, res: Response) {
    const result = await svc.getIndustries();
    res.status(200).json(result);
}

export async function insertIndustry(req: Request, res: Response) {
    const result = await svc.insertIndustry(req.body, req.file);
    res.status(201).json(result);
}

export async function updateIndustry(req: Request, res: Response) {
    const { seq } = req.params;
    const result = await svc.updateIndustry(Number(seq), req.body, req.file);
    res.status(200).json(result);
}

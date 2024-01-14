import EOADTO from "./EOA.dto";
import EOAServices from "./EOA.service";
import { NextFunction, Request, Response } from "express";

const CreateEOA = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const reqDTO = new EOADTO(req.body);

        await EOAServices.createEOA(reqDTO, next);

        res.send();
    } catch (error) {
        next(error);
    }
}

const ViewOneEOA = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const id = Number(req.params.id);
        const data = await EOAServices.viewOneEOA(id, next);

        res.json(data);
    } catch (error) {
        next(error);
    }
}

const UpdateEOA = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const id = Number(req.params.id);
        const reqDTO = new EOADTO(req.body);
        await EOAServices.updateEOA(id, reqDTO ,next);

        res.send();
    } catch (error) {
        next(error);
    }
}

const FindEOA = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const address = req.params.address.toString();
        const data = await EOAServices.findEOA(address, next);

        res.json(data);
    } catch (error) {
        next(error);
    }
}

export default { CreateEOA, ViewOneEOA, UpdateEOA, FindEOA };
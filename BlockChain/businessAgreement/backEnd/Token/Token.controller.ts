import TokenDTO from "./Token.dto";
import TokenServices from "./Token.service";
import { NextFunction, Request, Response } from "express";

const CreateToken = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const reqDTO = new TokenDTO(req.body);

        await TokenServices.createToken(reqDTO, next);

        res.send();
    } catch (error) {
        next(error);
    }
};

const ViewAllTokens = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const data = await TokenServices.viewAllTokens(next);

        res.json(data);
    } catch (error) {
        next(error);
    }
};

const ViewOneToken = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const id = Number(req.params.id);
        const data = await TokenServices.viewOneToken(id, next);

        res.json(data);
    } catch (error) {
        next(error);
    }
};

const UpdateToken = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const id = Number(req.params.id);
        const reqDTO = new TokenDTO(req.body);
        await TokenServices.updateToken(id, reqDTO, next);
    } catch (error) {
        next(error);
    }
};

const FindToken = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const name = req.params.name.toString();
        const data = await TokenServices.findToken(name, next);

        res.json(data);
    } catch (error) {
        next(error);
    }
}

export default { CreateToken, ViewAllTokens, ViewOneToken, UpdateToken, FindToken };
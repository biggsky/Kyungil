import NFTDTO from "./NFT.dto";
import NFTServices from "./NFT.service";
import { NextFunction, Request, Response } from "express";

const CreateNFT = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const reqDTO = new NFTDTO(req.body);

        await NFTServices.createNFT(reqDTO, next);

        res.send();
    } catch (error) {
        next(error);
    }
}

const ViewAllNFTs = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const data = await NFTServices.viewAllNFTs(next);

        res.json(data);
    } catch (error) {
        next(error);
    }
}

const ViewOneNFT = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const id = Number(req.params.id)
        const data = await NFTServices.viewOneNFT(id, next);

        res.json(data);
    } catch (error) {
        next(error);
    }
}

const UpdateNFT = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const id = Number(req.params.id);
        const reqDTO = new NFTDTO(req.body);
        await NFTServices.updateNFT(id, reqDTO, next);
    } catch (error) {
        next(error);
    }
}

export default { CreateNFT, ViewAllNFTs, ViewOneNFT, UpdateNFT };
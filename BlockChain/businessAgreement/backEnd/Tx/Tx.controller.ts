import TxDTO from "./Tx.dto";
import TxServices from "./Tx.service";
import { NextFunction, Request, Response } from "express";

const CreateTx = async (req: Request, res: Response, next : NextFunction) => {
  try {
    const reqDTO = new TxDTO(req.body);

    await TxServices.createTx(reqDTO, next);

    res.send();
  } catch (error) {
    next(error);
  }
};

const ViewAllTxs = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const data = await TxServices.viewAllTxs(next);

    res.json(data);
  } catch (error) {
    next(error);
  }
}

const ViewOneTx = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const id = Number(req.params.id)
    const data = await TxServices.viewOneTx(id, next);

    res.json(data);
  } catch (error) {
    next(error);
  }
}

const UpdateTx = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const id = Number(req.params.id);
    const reqDTO = new TxDTO(req.body);
    await TxServices.updateTx(id, reqDTO, next);
  } catch (error) {
    next(error);
  }
}

const FindTx = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const hash = req.params.hash.toString();
    const data = await TxServices.findTx(hash, next);

    res.json(data);
  } catch (error) {
    next(error);
  }
}

export default { CreateTx, ViewAllTxs, ViewOneTx, UpdateTx, FindTx };

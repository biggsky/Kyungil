import express from "express";
import TxControllers from "./Tx.controller";

const router = express.Router();

router.get('/', TxControllers.ViewAllTxs);

router.get('/:id', TxControllers.ViewOneTx);

router.get('/find/:hash', TxControllers.FindTx);

export default router;

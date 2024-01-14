import TxDTO from "./Tx.dto";
import db from "../database";
import { TxData } from "./Tx.model";
import { NextFunction } from "express";

import { getAddresstype } from "../information-system/function/txns/getAddresstype";
import TxCAService from "../TxCA/TxCA.service";
import TxEOAService from "../TxEOA/TxEOA.service";
import CAServices from "../CA/CA.service";
import EOAServices from "../EOA/EOA.service";
import { Op } from "sequelize";
const createTx = async (data: TxDTO, next: NextFunction) => {
  try {
    const {
      accessList,
      chainId,
      from,
      gas,
      gasPrice,
      hash,
      input,
      maxFeePerGas,
      maxPriorityFeePerGas,
      r,
      s,
      to,
      transactionIndex,
      type,
      v,
      value,
      Method,
      Timestamp,
    } = data;

    await db.models.Tx.create({
      accessList,
      chainId,
      from,
      gas,
      gasPrice,
      hash,
      input,
      maxFeePerGas,
      maxPriorityFeePerGas,
      r,
      s,
      to,
      transactionIndex,
      type,
      v,
      value,
      Method,
      Timestamp,
    });
  } catch (error) {
    next(error);
  }
};

const CreateTxTest = async (
  data: TxData,
  getcoderesultFrom: string,
  getcoderesultTO: string,
  sigEvaluateresult: string,
  timestamp?: bigint,
  block_id?: number,
  blocknumber?: number
): Promise<void> => {
  try {
    const {
      accessList,
      chainId,
      from,
      gas,
      gasPrice,
      hash,
      input,
      maxFeePerGas,
      maxPriorityFeePerGas,
      r,
      s,
      to,
      transactionIndex,
      type,
      v,
      value,
      Method,
      Timestamp,
    } = data;

    const Fromcol_id = await getAddresstype(
      from,
      getcoderesultFrom,
      sigEvaluateresult
    );

    const TOcol_id = await getAddresstype(
      to,
      getcoderesultTO,
      sigEvaluateresult
    );

    console.log(sigEvaluateresult);
    const parts = sigEvaluateresult.split(",");
    const result: any = await db.models.Tx.create({
      accessList,
      chainId,
      from,
      gas,
      gasPrice,
      hash,
      input,
      maxFeePerGas,
      maxPriorityFeePerGas,
      r,
      s,
      to,
      transactionIndex,
      type,
      v,
      value,
      Method: parts[2] || sigEvaluateresult, // parts[2]가 존재하면 parts[2]를 사용, 그렇지 않으면 sigEvaluateresult 사용
      Timestamp: timestamp,
      block_id: block_id,
      blocknumber,
    });

    if (getcoderesultFrom == getcoderesultTO) {
      if (getcoderesultFrom == "contract") {
        await TxCAService.createTxCA(
          result.dataValues.id,
          Fromcol_id.dataValues.id
        );
        await TxCAService.createTxCA(
          result.dataValues.id,
          TOcol_id.dataValues.id
        );
      } else if (getcoderesultFrom == "EOA") {
        await TxEOAService.createTxEOA(
          result.dataValues.id,
          Fromcol_id.dataValues.id
        );
        await TxEOAService.createTxEOA(
          result.dataValues.id,
          TOcol_id.dataValues.id
        );
      }
    } else {
      if (getcoderesultFrom == "EOA") {
        await TxEOAService.createTxEOA(
          result.dataValues.id,
          Fromcol_id.dataValues.id
        );
        await TxCAService.createTxCA(
          result.dataValues.id,
          TOcol_id.dataValues.id
        );
      } else if (getcoderesultFrom == "contract") {
        await TxEOAService.createTxEOA(
          result.dataValues.id,
          TOcol_id.dataValues.id
        );
        await TxCAService.createTxCA(
          result.dataValues.id,
          Fromcol_id.dataValues.id
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const getFindone = async (tmp: string) => {
  try {
    const tmpdata = tmp.toLocaleLowerCase();

    const result = await db.models.Tx.findOne({
      where: {
        hash: tmpdata,
      },
    });
    console.log("getFindone", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
const viewAllTxs = async (next: NextFunction) => {
  try {
    const txs = await db.models.Tx.findAll({order : [['Timestamp', 'DESC']]});

    return txs;
  } catch (error) {
    next(error);
  }
};

const viewOneTx = async (id: number, next: NextFunction) => {
  try {
    const tx = await db.models.Tx.findOne({ where: { id: id } });
    return tx;
  } catch (error) {
    next(error);
  }
};
const updateTx = async (id: number, data: TxDTO, next: NextFunction) => {
  try {
    await db.models.Tx.update({ Method: data.Method }, { where: { id } });
  } catch (error) {
    next(error);
  }
};

const findTx = async (hash : string, next : NextFunction) => {
  try {
    const tx = await db.models.Tx.findOne({where : {hash}})

    return tx;
  } catch (error) {
    next(error);
  }
}

export default {
  createTx,
  CreateTxTest,
  viewAllTxs,
  viewOneTx,
  getFindone,
  updateTx,
  findTx
};

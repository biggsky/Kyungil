import { NextFunction } from "express";
import db from "../database";
interface InputData {
  "0": string;
  "1": string;
  "2": bigint;
  __length__: number;
  from: string;
  to: string;
  value: bigint;
}

const result: Record<string, any> = {};
const viewOneEventlog = async (id: number, next: NextFunction) => {
  try {
    const log = await db.models.EventLog.findOne({
      where: { id },
      // include: { model: db.models.Tx },
    });
    return log;
  } catch (error) {
    console.log("ViewOneEventlogerr");
    next(error);
  }
};
const viewAllEventlog = async (address: string, next: NextFunction) => {
  try {
    const log = await db.models.EventLog.findAll({
      where: { transactionHash: address },
      // include: { model: db.models.Tx },
    });
    return log;
  } catch (error) {
    console.log("ViewAllEventlogerr");
    next(error);
  }
};
const createEventlog = async (eventdata: any) => {
  try {
    // console.log("createEventlog", eventdata);
    const {
      address,
      blockHash,
      blockNumber,
      data,
      logIndex,
      removed,
      topics,
      transactionHash,
      transactionIndex,
      returnValues,
      event,
      signature,
    } = eventdata;
    const jsonString = JSON.stringify(returnValues, (key, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    });

    const result = await db.models.EventLog.create({
      address,
      blockHash,
      blockNumber,
      data,
      logIndex,
      removed,
      topics,
      transactionHash,
      transactionIndex,
      returnValues: jsonString,
      event,
      signature,
    });
    // console.log("hahsdhahdsha", result);
    return result;
  } catch (error) {
    console.log("createEventlog 오류발생", error);
  }
};
export default { createEventlog, viewOneEventlog, viewAllEventlog };

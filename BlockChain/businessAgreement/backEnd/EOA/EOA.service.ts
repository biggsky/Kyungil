import EOADTO from "./EOA.dto";
import db from "../database";
import { EOAData } from "./EOA.model";
import { NextFunction } from "express";

const createEOA = async (data: EOADTO, next: NextFunction) => {
  try {
    const { address, token, ethBalance } = data;

    await db.models.EOA.create({
      address,
      token,
      ethBalance,
    });
  } catch (error) {
    next(error);
  }
};

const viewOneEOA = async (id: number, next: NextFunction) => {
  try {
    const eoa = await db.models.EOA.findOne({ where: { id }, include : {model : db.models.Tx} });

    return eoa;
  } catch (error) {
    next(error);
  }
};

const updateEOA = async (id: number, data: EOADTO, next: NextFunction) => {
  try {
    await db.models.EOA.update(
      {
        address: data.address,
        token: data.token,
        ethbalance: data.ethBalance,
      },
      { where: { id } }
    );
  } catch (error) {
    next(error);
  }
};

const findEOA = async (address: string, next: NextFunction) => {
  try {
    const eoa = await db.models.EOA.findOne({where : {address}, include : {model : db.models.Tx} });

    return eoa;
  } catch (error) {
    next(error);
  }
};

const createEOATest = async (data: EOAData) => {
  try {
    const { address, token, ethBalance } = data;
    const result = await db.models.EOA.create({
      address,
      token,
      ethBalance,
    });
    return result;
  } catch (error) {
    console.log("createEOATest", error);
  }
};
const getEoall = async () => {
  try {
    const result = await db.models.EOA.findAll({});
    return result;
  } catch (error) {
    console.log("getEoall", error);
  }
};
const updateEoaethBalance = async (id: string, balance: string) => {
  try {
    await db.models.EOA.update(
      { ethBalance: balance.toString() },
      { where: { address: id } }
    );
    console.log("실행?");
  } catch (error) {
    console.log("updateEoaethBalance", error);
  }
};
const findTxByEOA = async () => {
  try {
    // CA 타입이 'erc721'인 CA 정보 가져오기
    const ca: any = await db.models.EOA.findAll({
      // where: { CAtype: caType },
      include: [
        {
          model: db.models.Tx, // Tx 정보도 함께 가져오기
        },
      ],
    });
    console.log("findTxByEOA", ca);
    if (!ca) {
      console.log(`EOA with type not found.`);
      return null;
    }

    console.log(`Tx information for EOA`);

    return ca; // 반환할 때는 연결된 Tx 정보를 반환하거나 다른 방식으로 활용할 수 있습니다.
  } catch (error) {
    console.log("findTxByEOA", error);
  }
};
const findEOAone = async (address: string) => {
  try {
    const eoa: any = await db.models.EOA.findOne({
      where: { address: address },
    });
    return eoa;
  } catch (error) {
    console.log("findEOAoneerror", error);
  }
};

export default {
  createEOA,
  createEOATest,
  viewOneEOA,
  getEoall,
  updateEOA,
  updateEoaethBalance,
  findTxByEOA,
  findEOA,
  findEOAone,
};

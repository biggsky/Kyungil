import CADTO from "./CA.dto";
import db from "../database";
import { CAData } from "./CA.model";
import { NextFunction } from "express";
import sequelize, { Op, where } from "sequelize";
import { CAInstance } from "../information-system/Interface/CA_dbresult_interface";

const createCA = async (data: CADTO, next: NextFunction) => {
  try {
    await db.models.CA.create({
      address: data.address,
      abiSigniture: data.abiSigniture,
      signitureNames: data.signitureNames,
    });
  } catch (error) {
    next(error);
  }
};

const viewOneCA = async (id: number, next: NextFunction) => {
  try {
    const ca = await db.models.CA.findOne({
      where: { id },
      include: { model: db.models.Tx },
    });

    return ca;
  } catch (error) {
    next(error);
  }
};

const updateCA = async (data: CADTO, next: NextFunction) => {
  try {
    // await db.models.CA.update({ abi: data.abi }, { where: { id } });
    await postjson(data);
    await CAtxnsMethodsUpdate(data.address, data);
  } catch (error) {
    console.log("caservice updateCA error");
    next(error);
  }
};

const findCA = async (address: string, next: NextFunction) => {
  try {
    const ca = await db.models.CA.findOne({
      where: { address },
      include: { model: db.models.Tx },
    });

    return ca;
  } catch (error) {
    next(error);
  }
};

const findCAtype = async () => {
  try {
    const result = await db.models.CA.findAll({
      include: {
        model: db.models.Tx,
      },
    });
    return result;
  } catch (error) {
    console.log("findCAtype", error);
  }
};
const findTxByCAType = async (caType: string) => {
  try {
    // CA 타입이 'erc721'인 CA 정보 가져오기
    const ca: any = await db.models.CA.findAll({
      where: { CAtype: caType },
      include: [
        {
          model: db.models.Tx, // Tx 정보도 함께 가져오기
        },
      ],
    });
    console.log("findTxByCAType", ca);
    if (!ca) {
      console.log(`CA with type ${caType} not found.`);
      return null;
    }

    // CA에 연결된 Tx 정보 출력
    console.log(`Tx information for CA with type ${caType}`);

    return ca; // 반환할 때는 연결된 Tx 정보를 반환하거나 다른 방식으로 활용할 수 있습니다.
  } catch (error) {
    console.log("findTxByCAType", error);
  }
};

const createCATest = async (data: CAData) => {
  try {
    const { address, abiSigniture, signitureNames, CAtype } = data;
    const result = await db.models.CA.create({
      address,
      CAtype,
      abiSigniture,
      signitureNames,
    });
    return result;
  } catch (error) {
    console.log("createCATest에서 오류발생", error);
  }
};

const postjson = async (data: any) => {
  try {
    const isDuplicate = await db.models.CA.findOne({
      where: {
        address: data.address,
      },
    });
    if (isDuplicate) {
      await db.models.CA.update(
        {
          abiSigniture: data.abiSigniture,
          signitureNames: data.signitureNames,
          abi: data.abi,
          CAtype: data.CAtype,
        },
        { where: { address: data.address } }
      );
    } else {
      await db.models.CA.create({
        address: data.address,
        abiSigniture: data.abiSigniture,
        signitureNames: data.signitureNames,
        abi: data.abi,
        CAtype: data.CAtype,
      });
    }
  } catch (error) {
    console.log("CAmodel의 postjson", error);
  }
};

const CAtxnsMethodsUpdate = async (address: any, data: any) => {
  try {
    const transactions = await db.models.Tx.findAll({
      where: {
        [Op.or]: [{ from: address }, { to: address }],
      },
    });
    await Promise.all(
      transactions.map(async (value: any) => {
        console.log(value.dataValues.Method);
        for (let i = 0; i < data.signitureNames.length; i++) {
          if (data.abiSigniture[i] === value.dataValues.Method) {
            await db.models.Tx.update(
              { Method: data.signitureNames[i] },
              { where: { id: value.id } }
            );
          }
        }
      })
    );

    console.log(transactions);
  } catch (error) {
    console.log("CAmodel의 CAtxnsMethodsUpdate", error);
  }
};

export default {
  createCA,
  createCATest,
  findCAtype,
  viewOneCA,
  updateCA,
  findTxByCAType,
  postjson,
  CAtxnsMethodsUpdate,
  findCA,
};

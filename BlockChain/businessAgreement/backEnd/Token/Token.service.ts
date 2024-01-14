import TokenDTO from "./Token.dto";
import db from "../database";
import { TokenData } from "./Token.model";
import { NextFunction } from "express";

const createToken = async (data: TokenDTO, next: NextFunction) => {
  try {
    const {
      contractAddress,
      name,
      symbol,
      ownerAddress,
      decimal,
      circulatingSupply,
    } = data;

    await db.models.Token.create({
      contractAddress,
      name,
      symbol,
      ownerAddress,
      decimal,
      circulatingSupply,
    });
  } catch (error) {
    next(error);
  }
};

const viewAllTokens = async (next: NextFunction) => {
  try {
    const tokens = await db.models.Token.findAll();

    return tokens;
  } catch (error) {
    next(error);
  }
};

const viewOneToken = async (id: number, next: NextFunction) => {
  try {
    const token = await db.models.Token.findOne({
      where: { id },
      include: { model: db.models.Tx },
    });

    return token;
  } catch (error) {
    next(error);
  }
};

const getAllTokens = async () => {
  try {
    const tokens = await db.models.Token.findAll({
      include: {
        model: db.models.Tx,
      },
    });

    return tokens;
  } catch (error) {
    console.log("getAllTokens", error);
  }
};

const createTokentest = async (data: TokenData, contractAddress: any) => {
  try {
    const {
      contractAddress,
      name,
      symbol,
      ownerAddress,
      decimal,
      circulatingSupply,
    } = data;

    const result = await db.models.Token.create({
      contractAddress,
      name,
      symbol,
      ownerAddress,
      decimal,
      circulatingSupply,
    });
    // 'from' 열의 값을 찾아서 'token_id' 업데이트
    await db.models.Tx.update(
      { token_id: result.dataValues.id }, // 업데이트할 값
      { where: { from: contractAddress } } // 조건
    );

    // 'to' 열의 값을 찾아서 'token_id' 업데이트
    await db.models.Tx.update(
      { token_id: result.dataValues.id }, // 업데이트할 값
      { where: { to: contractAddress } } // 조건
    );
  } catch (error) {
    console.log("토큰 서비스에서 토큰 데이터 추가하다 에러남");
    console.log(error);
  }
};
const isExist = async (address: string) => {
  try {
    const result = await db.models.Token.findOne({
      where: {
        contractAddress: address,
      },
    });
    return result;
  } catch (error) {
    console.log("isExist", error);
  }
};

const updateToken = async (id: number, data: TokenDTO, next: NextFunction) => {
  try {
    await db.models.Token.update(
      { circulatingSupply: data.circulatingSupply },
      { where: { id } }
    );
  } catch (error) {
    next(error);
  }
};

const findToken = async (name: string, next: NextFunction) => {
  try {
    const token = await db.models.Token.findOne({
      where: { name },
      include: { model: db.models.Tx },
    });

    return token;
  } catch (error) {
    next(error);
  }
};

export default {
  createToken,
  createTokentest,
  isExist,
  viewAllTokens,
  viewOneToken,
  updateToken,
  findToken,
  getAllTokens,
};

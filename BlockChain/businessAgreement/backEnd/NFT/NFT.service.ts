import NFTDTO from "./NFT.dto";
import db from "../database";
import { NFT, NFTData } from "./NFT.model";
import { Tx } from "../Tx/Tx.model";
import { Sequelize } from "sequelize-typescript";
import { NextFunction } from "express";
import { Op } from "sequelize";

const createNFT = async (data: NFTDTO, next: NextFunction) => {
  try {
    await db.models.NFT.create({
      tokenId: data.tokenId,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
      creatorAddress: data.creatorAddress,
      Owner: data.Owner,
    });
  } catch (error) {
    next(error);
  }
};

const viewAllNFTs = async (next: NextFunction) => {
  try {
    const nfts = await db.models.NFT.findAll();

    return nfts;
  } catch (error) {
    next(error);
  }
};

const viewOneNFT = async (id: number, next: NextFunction) => {
  try {
    const nft = await db.models.NFT.findOne({
      where: { id },
      include: { model: db.models.Tx },
    });

    return nft;
  } catch (error) {
    next(error);
  }
};

const updateNFT = async (id: number, data: NFTDTO, next: NextFunction) => {
  try {
    await db.models.NFT.update({ Owner: data.Owner }, { where: { id } });
  } catch (error) {
    next(error);
  }
};

const createNFTTest = async (data: NFTData, txDataid?: any) => {
  try {
    const {
      tokenId,
      name,
      description,
      imageUrl,
      creatorAddress,
      Owner,
      address,
    } = data;

    const result = await db.models.NFT.create({
      tokenId,
      name,
      description,
      imageUrl,
      creatorAddress,
      Owner,
      address,
    });
    const asd = await db.models.Tx.update(
      { NFT_id: result.dataValues.id },
      { where: { id: txDataid } }
    );
    console.log("asdasdsad", asd);
  } catch (error) {
    console.log("NFT 서비스에서 NFT 데이터 추가하다 에러남");
    console.log(error);
  }
};
const NFTtabledestroy = async () => {
  await db.models.NFT.destroy({
    where: {},
    truncate: true,
  });
};
const isExist = async (tokenId: number) => {
  try {
    const result = await db.models.NFT.findOne({
      where: {
        tokenId: tokenId,
      },
    });
    return result !== undefined && result !== null ? true : false;
  } catch (error) {
    console.log("isExist", error);
  }
};
// NFT.service.ts

const isDuplicateNFT = async (
  id: string,
  address: string,
  newOwner: string
): Promise<boolean> => {
  try {
    // 동일한 ID 또는 이름을 가진 NFT 중에서 소유자가 변경된 경우에만 업데이트
    const existingNFTs: any[] = await db.models.NFT.findAll({
      where: {
        [Op.or]: [{ tokenId: id }, { address: address }],
      },
    });

    if (existingNFTs.length === 0) {
      // 중복된 항목이 없으면 false 반환
      return false;
    }

    // 중복된 항목이 있는 경우
    for (const existingNFT of existingNFTs) {
      if (existingNFT.Owner !== newOwner) {
        // 소유자가 변경된 경우에만 업데이트
        await existingNFT.update({ Owner: newOwner });
      }
    }

    return true; // 중복된 NFT가 있고 업데이트를 수행했을 때 true 반환
  } catch (error) {
    console.log("isDuplicateNFT", error);
    return false; // 오류 발생 시 중복으로 처리하지 않도록 false 반환
  }
};

export default {
  createNFT,
  createNFTTest,
  isExist,
  viewAllNFTs,
  viewOneNFT,
  NFTtabledestroy,
  updateNFT,
  isDuplicateNFT
};

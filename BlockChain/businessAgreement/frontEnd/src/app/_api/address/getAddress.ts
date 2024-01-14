import { IResponseDataSequlErr } from "../interface";
import { IResponseNFTListData } from "../nft/interface";
import { IResponseTokenData } from "../token/interface";
import { isResponseDataSequlErr } from "../utils";
import { IAddressData, IAddressItem } from "./interface";

const divideTimeIntoUnits = (now: number, addressTime: number) => {
  const timestampInMilliseconds = addressTime * 1000;

  const difference = now - timestampInMilliseconds;
  if (Math.floor(difference / 3600000) > 1) {
    return `${Math.floor(difference / 3600000)} hours ago`;
  } else if (Math.floor(difference / 60000) > 1) {
    return `${Math.floor(difference / 60000)} minutes ago`;
  } else {
    return `${Math.floor(difference / 1000)} seconds ago`;
  }
};

export const getAddress = async (address: string) => {

  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/eoa/find/${address}`,
    { cache: "no-cache" }
  );

  const resTokenData = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/token`,
    { cache: "no-cache" }
  );
  const resNFTData = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/nft`,
    { cache: "no-cache" }
  );

  const tokenDataList: IResponseNFTListData[] | IResponseDataSequlErr = await resTokenData.json();
  
  const NFTDataList: IResponseTokenData[] | IResponseDataSequlErr = await resNFTData.json();

  const responseAddressData: IAddressData | IResponseDataSequlErr = await res.json();

  if(isResponseDataSequlErr(tokenDataList) || isResponseDataSequlErr(NFTDataList) || isResponseDataSequlErr(responseAddressData)){
    return null;
  }

  responseAddressData.txs = responseAddressData.txs.map((txData, index) => {
    const NFTObj = NFTDataList.find((el) => {
      return el.id === Number(txData.NFT_id);
    });

    const tokenObj = tokenDataList.find((el) => {
      return el.id === Number(txData.token_id);
    });
    return {
      ...txData,
      NFTName: NFTObj === undefined ? "" : NFTObj.name,
      tokenName: tokenObj === undefined ? "" : tokenObj.name,
    };
  });
  return responseAddressData;
};

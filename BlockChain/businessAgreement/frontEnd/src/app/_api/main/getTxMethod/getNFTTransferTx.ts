import { ITransactionItemData } from "@app/_api/txDetail/interface";
import { IListTransactionData, IResponseTransactionData } from "../interface";
import { fromWeiToETH } from "./utils/fromWeiToETH";
import { divideTimeIntoUnits } from "./utils/divideTimeIntoUnits";
import { INftTransList } from "@app/(page)/nftTrans/interface";
import { IResponseNFTListData } from "@app/_api/nft/interface";
import { isResponseDataSequlErr } from "@app/_api/utils";
import { IResponseDataSequlErr } from "@app/_api/interface";

export const getNFTTransferTx = async (
  responseTransactionData: IResponseTransactionData[]
) => {
  const filteredTransactionData: IResponseTransactionData[] =
    responseTransactionData.filter((el) => {
      return el.NFT_id !== null;
    });
  const responseNFTData = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/nft`,
    { next: { revalidate: 30 } }
  );

  const NFTData: IResponseNFTListData[] | IResponseDataSequlErr = await responseNFTData.json();
  if(isResponseDataSequlErr(NFTData)){
    return null;
  }

  const transactionData: INftTransList[] = filteredTransactionData.map((el) => {
    const NFTObj: IResponseNFTListData = NFTData.find((obj) => {
      return obj.id === Number(el.NFT_id);
    }) as IResponseNFTListData;
    return {
      from: el.from,
      to: el.to,
      hash: el.hash,
      age: divideTimeIntoUnits(Number(el.Timestamp)),
      method: el.Method,
      type: "ERC-721",
      itemName: NFTObj.name,
    };
  });
  return transactionData;
};

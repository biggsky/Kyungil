import { IResponseDataSequlErr } from "../interface";
import { isResponseDataSequlErr } from "../utils";
import { getAllTx } from "./getTxMethod/getAllTx";
import { getMainTx } from "./getTxMethod/getMainTx";
import { getNFTTransferTx } from "./getTxMethod/getNFTTransferTx";
import { getTokenTransferTx } from "./getTxMethod/getTokenTransferTx";
import {
  IResponseTransactionData,
  IMainTransactionData,
  IListTransactionData,
} from "./interface";

export const getTransaction = async (pageName: string) => {
  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/tx`,
    { cache: "no-cache" }
  );
  try {
    const responseTransactionData: IResponseTransactionData[] | IResponseDataSequlErr =
      await res.json();
    if(isResponseDataSequlErr(responseTransactionData)){
      return null
    }
    
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    if (pageName === "main") {
      return getMainTx(responseTransactionData);
    } else if (pageName === "list") {
      return getAllTx(responseTransactionData);
    } else if (pageName === "NFT") {
      return await getNFTTransferTx(responseTransactionData);
    } else if (pageName === "token") {
      return await getTokenTransferTx(responseTransactionData);
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

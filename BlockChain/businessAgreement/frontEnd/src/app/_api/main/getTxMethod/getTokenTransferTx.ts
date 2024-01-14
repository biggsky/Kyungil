import { ITransactionItemData } from "@app/_api/txDetail/interface";
import { IListTransactionData, IResponseTransactionData } from "../interface";
import { fromWeiToETH } from "./utils/fromWeiToETH";
import { divideTimeIntoUnits } from "./utils/divideTimeIntoUnits";
import { IResponseTokenData } from "@app/_api/token/interface";
import { isResponseDataSequlErr } from "@app/_api/utils";
import { IResponseDataSequlErr } from "@app/_api/interface";

export const getTokenTransferTx = async (
  responseTransactionData: IResponseTransactionData[]
) => {
  const filteredTransactionData: IResponseTransactionData[] =
    responseTransactionData.filter((el) => {
      return el.token_id !== null;
    });

  const responseTokenData = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/token`,
    { next: { revalidate: 30 } }
  );

  console.log("asd");
  const tokenData: IResponseTokenData[] | IResponseDataSequlErr = await responseTokenData.json();

  if(isResponseDataSequlErr(tokenData)){
    return null;
  }

  const transactionData: IListTransactionData[] = filteredTransactionData.map(
    (el) => {
      const tokenObj: IResponseTokenData = tokenData.find((obj) => {
        return obj.id === Number(el.token_id);
      }) as IResponseTokenData;
      return {
        value: tokenObj.name,
        from: el.from,
        to: el.to,
        txHash: el.hash,
        age: divideTimeIntoUnits(Number(el.Timestamp)),
        blocknumber: el.blocknumber.toString(),
        method: el.Method,
      };
    }
  );
  return transactionData;
};

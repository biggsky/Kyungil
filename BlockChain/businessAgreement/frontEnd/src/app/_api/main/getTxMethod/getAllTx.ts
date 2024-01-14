import { IListTransactionData, IResponseTransactionData } from "../interface";
import { divideTimeIntoUnits } from "./utils/divideTimeIntoUnits";
import { fromWeiToETH } from "./utils/fromWeiToETH";

export const getAllTx = (responseTransactionData: IResponseTransactionData[]) => {
  const transactionData: IListTransactionData[] = responseTransactionData.map(
    (el) => {
      return {
        value: fromWeiToETH(el.value).toString(),
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

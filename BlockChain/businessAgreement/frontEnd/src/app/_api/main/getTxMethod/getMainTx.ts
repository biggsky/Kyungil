import { IMainTransactionData, IResponseTransactionData } from "../interface";
import { divideTimeIntoUnits } from "./utils/divideTimeIntoUnits";
import { fromWeiToETH } from "./utils/fromWeiToETH";

export const getMainTx = (responseTransactionData: IResponseTransactionData[]) => {
  const transactionData: IMainTransactionData[] = responseTransactionData.map(
    (el) => {
      return {
        ethAmount: fromWeiToETH(el.value).toString(),
        fromAddress: el.from,
        toAddress: el.to,
        transactionHash: el.hash,
        transactionTime: divideTimeIntoUnits(Number(el.Timestamp)),
      };
    }
  );

  
  return transactionData.slice(0, 5);
};

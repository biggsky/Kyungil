import { IResponseTransactionData } from "@app/_api/main/interface";
import React from "react";

const combineTwoArray = (from: Array<string>, to: Array<string>) => {
  const tempArr = from.concat(to);
  return Array.from(new Set(tempArr));
};
const useFilterTx = (tx: IResponseTransactionData[]) => {
  const from = tx.map(({ from }) => {
    return from;
  });
  const to = tx.map(({ to }) => {
    return to;
  });
  return combineTwoArray(from, to);
};

export default useFilterTx;

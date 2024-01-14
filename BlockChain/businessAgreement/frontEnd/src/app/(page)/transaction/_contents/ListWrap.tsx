"use client";
import TxListWrap from "@app/_components/transactionTable";
import useHydration from "@app/_hooks/useHydration";
import React from "react";
import { ITransactionListWrapProps } from "../interface";

const TransactionListWrap: React.FC<ITransactionListWrapProps> = ({
  transactionList,
}) => {
  const isRendered = useHydration();
  return (
    <div>
      {" "}
      {isRendered && (
        <TxListWrap
          txList={transactionList}
          lastName="Value"
          pageStack={50}
        />
      )}
    </div>
  );
};

export default TransactionListWrap;

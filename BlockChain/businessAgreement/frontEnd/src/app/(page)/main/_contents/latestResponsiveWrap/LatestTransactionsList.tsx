"use client";
import React, { useEffect } from "react";
import LatestTransactionsItem from "./LatestTransactionsItem";
import { ITransactionsListProps } from "../../interface";

const MainLatestTransactionsList: React.FC<ITransactionsListProps> = ({
  transactionslist,
}) => {
  return (
    <ul className="w-full">
      {transactionslist.map((item, index) => (
        <React.Fragment key={index}>
          <LatestTransactionsItem transactionsData={item} />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MainLatestTransactionsList;

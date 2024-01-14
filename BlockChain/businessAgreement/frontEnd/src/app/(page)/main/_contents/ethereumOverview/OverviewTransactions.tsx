import React from "react";
import MainTransactionsIndicator from "./TransactionsIndicator";
import MainTransactionsVolume from "./TransactionsVolume";
import { IOverviewTransactionsDataProps } from "../../interface";


const MainOverviewTransactions: React.FC<IOverviewTransactionsDataProps> = ({
  overviewTransactionsData,
}) => {
  const {
    totalTransactionsCounter,
    transactionsPerSecond,
  } = overviewTransactionsData;
  return (
    <div className='border-gray flex m-auto sm:w-11/12 sm:border-b-[1px] sm:pl-0 sm:p-5'>
      <MainTransactionsIndicator />
      <MainTransactionsVolume totalTransactionsCounter={totalTransactionsCounter} transactionsPerSecond={transactionsPerSecond} />
    </div>
  );
};

export default MainOverviewTransactions;

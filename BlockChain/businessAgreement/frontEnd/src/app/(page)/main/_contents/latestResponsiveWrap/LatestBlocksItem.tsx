import React from "react";
import BlockInfo from "./BlockInfo";
import Miner from "./Miner";
import TransactionsNumber from "./TransactionsNumber";
import MainEthValue from "@app/_components/mainEthValue";
import { IBlocksItemProps } from "../../interface";

const MainLatestBlocksItem: React.FC<IBlocksItemProps> = ({ blocksItem }) => {
  const {
    blockHeight,
    blockTime,
    feeRecipient,
    transactionsInThisBlock,
    transactionsTime,
  } = blocksItem;
  return (
    <li className="w-11/12 m-auto border-gray text-sm border-b-[1px] last:border-b-0 py-[15px] md:flex lg:flex min-h-[79px] ">
      <BlockInfo blockHeight={blockHeight} blockTime={blockTime} />
      <div className="sm:inline md:ml-auto lg:ml-auto">
        <Miner feeRecipient={feeRecipient} />
        <TransactionsNumber blockHeight={blockHeight} transactionsInThisBlock={transactionsInThisBlock} transactionsTime={transactionsTime} />
      </div>
      {/* <MainEthValue ethValue={blockReward} /> */}
    </li>
  );
};

export default MainLatestBlocksItem;

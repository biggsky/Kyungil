"use client";

import React, { useEffect, useState } from "react";
import { BlocksInfoProps } from "../../interface";
import BlockCardText from "./CardText";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Info: React.FC<BlocksInfoProps> = ({
  blockHeight,
  status,
  timeStamp,
  transaction,
}) => {
  // const BlockNumber = blockHeight
  // console.log(BlockNumber)

  const [BlockNumber, setBlockNumber] = useState(parseInt(blockHeight, 10));
  const router = useRouter();

  const increment = () => {
    const newBlockNumber = BlockNumber + 1;
    setBlockNumber(newBlockNumber);
    router.push(`/blocks/${newBlockNumber}`);
  };

  const decrement = () => {
    const newBlockNumber = BlockNumber - 1;
    setBlockNumber(newBlockNumber);
    router.push(`/blocks/${newBlockNumber}`);
  };

  return (
    <div className=" border-gray dark:text-white">
      <BlockCardText
        title="Block Height:"
        content={
          <>
            <span className="">{BlockNumber}</span>
            <span className="">
              <button
                onClick={decrement}
                className="bg-gray w-auto px-1 text-base rounded ml-1 dark:bg-gray/30"
              >
                {"<"}
              </button>
              <button
                onClick={increment}
                className="bg-gray  w-auto px-1 text-base rounded ml-1 dark:bg-gray/30"
              >
                {">"}
              </button>
            </span>
          </>
        }
      ></BlockCardText>
      <BlockCardText
        title="Status:"
        content={
          <span className="border-2 rounded p-1 bg-gray border-black/10 font-bold  dark:text-black">
            {status}
          </span>
        }
      >
        {/* <span className="border-2 rounded p-1 bg-green-300/40 border-green-500/30 text-green-800 font-bold">
          Finalized
        </span> */}
      </BlockCardText>
      <BlockCardText title="Timestamp:" content={timeStamp} />

      <BlockCardText
        title="Transaction:"
        content={
          <>
            <Link className="text-text-mainTextColor" href={`/blocks/txs`}>
              {transaction} transaction
            </Link>
            <span> in this block</span>
          </>
        }
      ></BlockCardText>
    </div>
  );
};

export default Info;

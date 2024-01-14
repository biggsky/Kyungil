import React from "react";
import { ITransactionsNumberProps } from "../../interface";
import Link from "next/link";

const MainTransactionsNumber: React.FC<ITransactionsNumberProps> = ({
  transactionsInThisBlock,
  transactionsTime,
  blockHeight,
}) => {
  return (
    <>
      <Link href={`/txs/${blockHeight}`} className=' text-text-mainTextColor'>
        {transactionsInThisBlock} txns
      </Link>
      <span className='ml-2 text-xs text-zinc-400'>
        in {transactionsTime} secs
      </span>
    </>
  );
};

export default MainTransactionsNumber;

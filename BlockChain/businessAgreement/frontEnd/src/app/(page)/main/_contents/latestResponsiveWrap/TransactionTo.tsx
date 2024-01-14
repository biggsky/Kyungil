import React from "react";
import { ITransactionTo } from "../../interface";
import Link from "next/link";

const MainTransactionTo: React.FC<ITransactionTo> = ({ toAddress }) => {
  const truncate = (transaction: string) => {
    return transaction.slice(0, 8) + "..." + transaction.slice(-8);
  };
  const truncateTransaction = truncate(toAddress);
  return (
    <span className="dark:text-white">
      To
      <Link href={`/address/${toAddress}`} className='ml-2 text-text-mainTextColor'>
        {truncateTransaction}
      </Link>
    </span>
  );
};

export default MainTransactionTo;

import React from "react";
import { ITransactionsVolumeProps } from "../../interface";
import Link from "next/link";

const MainTransactionsVolume:React.FC<ITransactionsVolumeProps> = ({totalTransactionsCounter, transactionsPerSecond}) => {
  return (
    <div className='w-[160px] whitespace-nowrap sm:text-[11px] md:text-[12px] lg:text-[15px]'>
      <p className='text-zinc-400 font-titleFont'>TRANSACTIONS</p>
      <p>
        <Link href={`/transaction`}>
        <span className="md:text-[15px] lg:text-[20px] ">
          <span className="dark:text-white">{totalTransactionsCounter}</span> M
        </span>
        <span className='text-zinc-400 '> ({transactionsPerSecond} TPS)</span>
      </Link>
      </p>
    </div>
  );
};

export default MainTransactionsVolume;

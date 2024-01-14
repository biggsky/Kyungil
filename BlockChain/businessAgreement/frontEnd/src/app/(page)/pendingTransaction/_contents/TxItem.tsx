/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { IPendingTransaction, IPendingTransactionProps } from "./interface";
import { useRouter } from "next/navigation";
import Link from "next/link";
import WordBallon from "@app/_components/wordBallon";
import Image from "next/image";
import Arrow from "public/arrow.png";

const PendingTxItem: React.FC<IPendingTransaction> = ({
  amount,
  from,
  gasLimit,
  gasPrice,
  lastSeen,
  method,
  nonce,
  to,
  txHash,
}) => {
  const addressEncodeHandler = (address: string) => {
    return (
      address.substring(0, 4) + "...." + address.substring(address.length - 4)
    );
  };
  const txNavigation = useRouter();
  return (
    <tr className="h-14 border-b border-gray text-sm flex items-center">
      <td
        className=" text-text-mainTextColor max-w-[240px] truncate px-5 "
        onClick={() => {
          txNavigation.push(`/transaction/${txHash}`);
        }}
      >
        {txHash}
      </td>
      <td className="items-center min-w-[150px]">
        <span className="bg-gray max-w-[95px] p-1 rounded dark:text-black">{method}</span>
      </td>
      <td className=" items-center min-w-[100px]">{nonce}</td>
      <td className=" items-center min-w-[150px]">{lastSeen}</td>
      <td className=" items-center min-w-[100px]">{gasLimit}</td>
      <td className=" items-center min-w-[100px]">{gasPrice}</td>
      <td className="  min-w-[130px] lg:w-44">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor">
            <Link href={`/transaction/${from}`}>
              {" "}
              {addressEncodeHandler(from)}
            </Link>
          </div>
          <div className="ml-3">
            <WordBallon copyValue={from} />
          </div>
          
        </div>
      </td>
      <td>
        <div className="min-w-[20px] sm:mr-[15px] md:mr-[20px] lg:mr-[30px]">
          <Image alt='' width={20} src={Arrow} />
        </div>
      </td>
      <td className=" min-w-[150px] lg:w-64">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor">
            <Link href={`/transaction/${to}`}> {addressEncodeHandler(to)}</Link>
          </div>
          <div className="ml-3">
            <WordBallon copyValue={to} />
          </div>
          
        </div>
      </td>
      <td className=" items-center min-w-[100px]">{amount}</td>
    </tr>
  );
};

export default PendingTxItem;

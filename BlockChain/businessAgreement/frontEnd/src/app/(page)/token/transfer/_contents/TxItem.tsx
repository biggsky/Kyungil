/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ITokenTransferItemProps } from "../../interface";
import { useRouter } from "next/navigation";
import { faCopy, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import Arrow from "public/arrow.png";
import WordBallon from "@app/_components/wordBallon";

const TokenTransferItem: React.FC<ITokenTransferItemProps> = ({
  TxItem,
  toggleHandler,
}) => {
  const addressEncodeHandler = (address: string) => {
    return (
      address.substring(0, 4) + "...." + address.substring(address.length - 4)
    );
  };
  const txNavigation = useRouter();
  return (
    <tr className="h-14 border-b flex items-center border-gray text-sm  align-middle dark:text-white">
      <td className="min-w-[60px] lg:w-20 flex items-center justify-center p-2 relative">
        <div className="relative">
          <FontAwesomeIcon
            className="border-gray rounded-lg p-[10px] border-[1px] cursor-pointer"
            icon={faEye}
            onClick={toggleHandler}
          />
        </div>
      </td>

      <td
        className="min-w-[200px] max-w-[200px] truncate  text-text-mainTextColor cursor-pointer"
        onClick={() => {
          txNavigation.push(`/transaction/${TxItem.txHash}`);
        }}
      >
        {" "}
        {TxItem.txHash}
      </td>
      <td className="min-w-[120px]  items-center">
        <span className="bg-gray max-w-[95px] ml-2 p-1 rounded dark:text-black">
          {TxItem.method}
        </span>
      </td>
      <td className="min-w-[100px] items-center">{TxItem.blocknumber}</td>
      <td className="min-w-[100px] items-center">{TxItem.age}</td>
      <td className="min-w-[120px]">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor">
            <Link href={`/address/${TxItem.from}`}>
              {" "}
              {addressEncodeHandler(TxItem.from)}
            </Link>
          </div>
          <div className="ml-3">
            <WordBallon copyValue={TxItem.from} />
          </div>
        </div>
      </td>
      <td className="flex justify-center sm:w-[50px] md:w-[100px]  lg:w-[150px]">
        <Image alt="" width={20} src={Arrow} />
      </td>
      <td className="min-w-[200px] lg:w-64">
        <div className="w-full flex ">
          <div className="text-text-mainTextColor">
            <Link href={`/address/${TxItem.to}`}>
              {" "}
              {addressEncodeHandler(TxItem.to)}
            </Link>
          </div>
          <div className="ml-3">
            <WordBallon copyValue={TxItem.to} />
          </div>
        </div>
      </td>
      <td className="min-w-[100px] items-center">{TxItem.value}</td>
    </tr>
  );
};

export default TokenTransferItem;

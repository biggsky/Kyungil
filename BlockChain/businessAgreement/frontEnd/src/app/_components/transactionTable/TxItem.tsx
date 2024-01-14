/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { ITxItemProps } from "./interface";
import { useRouter } from "next/navigation";
import {
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import Arrow from "public/arrow.png";
import arrowIcon from "public/arrowIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

import WordBallon from "@app/_components/wordBallon";

const TxItem: React.FC<ITxItemProps> = ({ TxItem, toggleHandler }) => {

  const addressEncodeHandler = (address: string) => {
    return (
      address.substring(0, 4) + "...." + address.substring(address.length - 4)
    );
  };
  
  const txNavigation = useRouter();
  return (
    <tr className='border-b border-gray text-sm flex h-[50px] leading-[50px]'>
      {/* 1 */}
      <td className='min-w-[60px] flex justify-center items-center '>
        <FontAwesomeIcon
          className='border-gray border-[1px] rounded-lg p-[10px] cursor-pointer'
          icon={faEye}
          onClick={toggleHandler}
        />
      </td>
      {/* 2 */}
      <td
        className='min-w-[200px] w-[200px] truncate text-text-mainTextColor cursor-pointer'
        onClick={() => {
          txNavigation.push(`/transaction/${TxItem.txHash}`);
        }}>
        {TxItem.txHash}
      </td>
      {/* 3 */}
      <td className='min-w-[120px] flex items-center ml-[50px] '>
        <span className='bg-gray/30 border-black/10 border-[1px] px-2 py-1 rounded-lg text-xs inline-block w-[94px] text-center truncate'>
          {TxItem.method}
        </span>
      </td>
      {/* 4 */}
      <td className='min-w-[100px] items-center ml-[20px]'>{TxItem.blocknumber}</td>
      <td className='min-w-[110px] items-center '>{TxItem.age}</td>
      <td className='min-w-[120px] ml-[20px]'>
        <div className='w-full flex '>
          <div className='text-text-mainTextColor'>
            <Link href={`/address/${TxItem.from}`}>
              {addressEncodeHandler(TxItem.from)}
            </Link>
          </div>
          <div className="ml-3">
            <WordBallon copyValue={TxItem.from} />
          </div>
        </div>
      </td>
      <td className='flex justify-center items-center sm:w-[50px] md:w-[100px]  lg:w-[150px]'>
        <Image alt='' width={20} src={Arrow} />
      </td>
      <td className='min-w-[120px] lg:w-44'>
        <div className='w-full flex '>
          <div className='text-text-mainTextColor'>
            <Link href={`/address/${TxItem.to}`}>
              {addressEncodeHandler(TxItem.to)}
            </Link>
          </div>
          <div className="ml-3">
            <WordBallon copyValue={TxItem.to} />
          </div>
          
        </div>
      </td>
      <td className='min-w-[250px] items-center ml-[20px] '>{TxItem.value}</td>
    </tr>
  );
};

export default TxItem;

import React from "react";
import Link from "next/link";
import { IBlocksDataProps } from "../interface";

const BlockContent: React.FC<{ data: IBlocksDataProps }> = ({ data }) => {
  const BlocksDetailPath = `/blocks/${encodeURIComponent(data.block)}`;
  const transactionPath = "/transaction";
  const addressPath = "nft/ContractAddress";

  return (
    <tr className="border-b border-gray text-sm ">
      <td className="py-3 pl-4 min-w-[100px] justify-center text-text-mainTextColor">
        <Link href={BlocksDetailPath}>{data.block}</Link>
      </td>
      <td className="min-w-[150px] dark:text-white pl-4">{data.age}</td>
      <td className="min-w-[50px] text-text-mainTextColor ">
        <Link href={transactionPath}>{data.Txn}</Link>
      </td>
      <td className="min-w-[250px] truncate text-text-mainTextColor">
        <Link href={addressPath}>{data.feeRecipient}</Link>
      </td>
      <td className="min-w-[200px] dark:text-white pl-3">
        {data.gasUsed} <span>({data.gasUsedPercent}%)</span>
      </td>
      <td className="min-w-[200px] dark:text-white">{data.gasLimit}</td>
      <td className="dark:text-white">{data.baseFee}Gwei</td>
    </tr>
  );
};

export default BlockContent;

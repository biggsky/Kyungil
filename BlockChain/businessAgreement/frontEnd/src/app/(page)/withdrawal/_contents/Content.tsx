import React from "react";
import Link from "next/link";
import { WithdrawalDataProps} from "../interface";

const BlockContent: React.FC<{ data: WithdrawalDataProps }> = ({ data }) => {
  const BlocksDetailPath = `/blocks/${encodeURIComponent(data.block)}`;
  return (
    <tr className="border-b border-gray text-sm  ">
      <td className="min-w-[150px]">{data.index}</td>
      <Link href={BlocksDetailPath}>
        <td className="py-3  min-w-[100px] justify-center text-blue-400">{data.block}</td>
      </Link>
      <td className="min-w-[150px]">{data.age} secs ago</td>
      <td className=" min-w-[200px]">{data.recipient}</td>
      <td className=" min-w-[200px]">{data.value} ETH</td>
    </tr>
  );
};

export default BlockContent;

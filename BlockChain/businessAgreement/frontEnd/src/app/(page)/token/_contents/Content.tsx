import React from "react";
import Link from "next/link";
import { TokenDataProps } from "../interface";

const TokenContent: React.FC<{ data: TokenDataProps }> = ({ data }) => {
  const tokenDetailPath = `/token/${encodeURIComponent(data.name)}`;

  return (
    <tr className="border-b border-gray text-sm dark:text-white">
      <td className="py-3 px-4 ">{data.id}</td>
      <td>
        <Link href={tokenDetailPath}>
          <div className="flex items-center ">
            <span className="font-semibold"> {data.name} </span>
          </div>
        </Link>
      </td>
      <td className=" ">{data.decimal} </td>
      <td className={`w-32`}>{data.timeStamp}</td>
      <td className="">{data.symbol}</td>
      <td className="">{data.holder}</td>
    </tr>
  );
};

export default TokenContent;

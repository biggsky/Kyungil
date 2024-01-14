import React from "react";

export const BlockHeader = () => {
  return (
    <thead className=" text-nowrap border-b border-gray text-justify dark:text-white">
      <tr className="text-sm ">
        <th className="py-2 pl-4 min-w-[100px]">Block</th>
        <th className="pl-4 min-w-[60px]">Age</th>
        <th className="min-w-[100px]">Txn</th>
        <th className="min-w-[250px]">Fee Recipient</th>
        <th className="pl-3 min-w-[200px]">Gas Used</th>
        <th className="min-w-[200px]">Gas Limit</th>
        <th className="min-w-[184px]">Base Fee</th>
      </tr>
    </thead>
  );
};

import React from "react";

const TableHeader = () => {
  return (
    <thead className="align-middle text-nowrap border-b border-gray text-justify">
      <tr className="text-sm border-box">
        <th className="py-2 min-w-[60px] flex px-4 dark:text-white">#</th>
        <th className=" min-w-[350px] dark:text-white">Token</th>
        <th className="text-text-mainTextColor min-w-[100px] ">Decimal</th>
        <th className="text-text-mainTextColor min-w-[230px]">Create Date</th>
        <th className="text-text-mainTextColor min-w-[230px]">Symbol</th>
        <th className="text-text-mainTextColor min-w-[200px]">Holders</th>
      </tr>
    </thead>
  );
};

export default TableHeader;

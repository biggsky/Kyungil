"use client";
import React from "react";
import Title from "./_contents/Title";
import ItemTable from "@app/_components/itemTable";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
import { WithdrawalHeader } from "./_contents/Header";
import WithdrawalContent from "./_contents/Content";
import { WithdrawalDataProps } from "./interface";

const Ca = "0x13d1639cd9b11872b12594d7bf708c8f5cfeb183c126962b19af8ce7e9f99dd3";

const blocksData = [
  {
    index: "1234456789",
    block: "18545465",
    age: "4",
    recipient: `${Ca.slice(0, 6)} ... ${Ca.slice(-6)}`,
    value: "017250819",
  },
];
const Page = () => {
  const pagination = usePagination<WithdrawalDataProps>(blocksData);
  return (
    <div className="box-border flex flex-col p-3 bg-mainBackGroundColor items-center">
      <div className="w-full">
        <Title title="Processed Beacon Chain Withdrawals">For Block {""}</Title>
        <ItemTable>
          <div className="">
            <span className="text-sm">
              A total of 16 withdrawals found (Total 0.316717145 ETH withdrawn)
            </span>
            <table>
              <WithdrawalHeader />
              <tbody className="items-center">
                {pagination.pageTxList &&
                  (pagination.pageTxList as WithdrawalDataProps[]).map(
                    (data: WithdrawalDataProps, index: number) => (
                      <WithdrawalContent key={index} data={data} />
                    )
                  )}
              </tbody>
            </table>
          </div>
        </ItemTable>
        <Pagination
          maxPage={pagination.maxPage}
          page={pagination.page}
          pageHandler={pagination.pageHandler}
        />
      </div>
    </div>
  );
};

export default Page;

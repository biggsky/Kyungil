"use client";
import ItemTableWrap from "@app/_components/itemTable";
import Pagination from "@app/_components/pagination";
import React from "react";
import { BlockHeader } from "./Header";
import usePagination from "@app/_hooks/usePagination";
import { IBlocksTableProps } from "../interface";
import BlockContent from "./Content";

const BlocksTable: React.FC<IBlocksTableProps> = ({ blocksData }) => {
  const pagination = usePagination(blocksData);
  return (
    <ItemTableWrap>
      <div className='text-sm dark:text-white m-4'>Total of blocks</div>
      <div className='overflow-x-scroll'>
        <table>
          <BlockHeader />
          <tbody className='items-center'>
            {pagination.pageTxList &&
              (pagination.pageTxList as any).map((data: any, index: number) => (
                <BlockContent key={index} data={data} />
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        maxPage={pagination.maxPage}
        page={pagination.page}
        pageHandler={pagination.pageHandler}
      />
    </ItemTableWrap>
  );
};

export default BlocksTable;

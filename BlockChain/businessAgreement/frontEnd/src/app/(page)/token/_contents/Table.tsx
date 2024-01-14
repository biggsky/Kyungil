"use client";
import React from "react";
import TokenHeader from "@app/(page)/token/_contents/Header";
import TokenContent from "@app/(page)/token/_contents/Content";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
import { ITokenTableProps, TokenDataProps } from "../interface";

const TokenTable: React.FC<ITokenTableProps> = ({ tokenListData }) => {
  const pagination = usePagination<TokenDataProps>(tokenListData);
  return (
    <React.Fragment>
      {" "}
      <div className="overflow-x-scroll">
        <div className="min-w-[250px] max-w-[1250px] h-auto">
          <table>
            <TokenHeader />
            <tbody className="items-center">
              {pagination.pageTxList &&
                (pagination.pageTxList as TokenDataProps[]).map(
                  (data: TokenDataProps, index: number) => (
                    <TokenContent key={index} data={data} />
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        maxPage={pagination.maxPage}
        page={pagination.page}
        pageHandler={pagination.pageHandler}
      />
    </React.Fragment>
  );
};

export default TokenTable;

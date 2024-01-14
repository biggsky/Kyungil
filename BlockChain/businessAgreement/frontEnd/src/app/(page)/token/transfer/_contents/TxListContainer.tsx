/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { ITokenTransfer, ITokenTransferProps } from "../../interface";
import TxItem from "./TxItem";
import Pagination from "@app/_components/pagination";
import usePagiNation from "@app/_hooks/usePagination";

const TokenTransferList: React.FC<ITokenTransferProps> = ({
  pageTxList,
  toggleHandler,
}) => {
  return (
    <>
      {pageTxList &&
        (pageTxList as ITokenTransfer[]).map((ele) => (
          <TxItem TxItem={ele} toggleHandler={toggleHandler} key={ele.txHash} />
        ))}
    </>
  );
};

export default TokenTransferList;

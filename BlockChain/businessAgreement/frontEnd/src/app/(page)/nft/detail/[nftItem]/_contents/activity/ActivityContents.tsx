"use client"
import React, { useState } from "react";
import Pagination from "@app/_components/pagination";
import usePagination from "@app/_hooks/usePagination";
import ALTotalRecord from "./ALTotalRecord";
import AList from "./AList";
import { INftActivityProps } from "../../interface";
import { INftActivityData } from "../../interface";


const NftActivityContents: React.FC<INftActivityProps> = ({activityData}) => {
  // 페이지네이션
  const tempDataArr: INftActivityData[] = Array.from(
    { length: activityData.length },
    (ele, index) => {
      return {
        hash: activityData[index].hash,
        Timestamp: activityData[index].Timestamp,
        Method: activityData[index].Method,
        from: activityData[index].from,
        to: activityData[index].to,
      };
    },
  );
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<INftActivityData>(tempDataArr,10);

  return (
    <>
      <div>
        <ALTotalRecord totalCount={tempDataArr.length} />
        <AList pageTxList={pageTxList} />
        <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
      </div>
    </>
  );
};

export default NftActivityContents;

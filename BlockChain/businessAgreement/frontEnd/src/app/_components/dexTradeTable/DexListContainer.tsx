"use client";
import React from "react";
import { IdexList, DexListWrapProps } from "./interface";
import DexItem from "./DexItem";

const DexListContainer: React.FC<DexListWrapProps> = ({
  pageTxList,
  toggleHandler,
}) => {
  return (
    <div>
      {pageTxList &&
        (pageTxList as IdexList[]).map((ele) => (
          <DexItem DexItem={ele} toggleHandler={toggleHandler} key={ele.txHash} />
        ))}
    </div>
  );
};

export default DexListContainer;

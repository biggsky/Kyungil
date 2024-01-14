"use client";
import TxListWrap from "@app/_components/transactionTable";
import { ItxList } from "@app/_components/transactionTable/interface";
import React, { useEffect, useState } from "react";
import InfoTapContent from "./InfoTapContent";
import HoldersList from "@app/_components/holdersTable";
import DexList from "@app/_components/dexTradeTable";
import TabButton from "@app/_components/tabComponent/Tab";
import useHydration from "@app/_hooks/useHydration";
import useFilterTx from "@app/_hooks/useFilterTx";
import { ICaDetailData, ICaTxList, ICaTxListProps } from "../../interface";
import { divideTimeIntoUnits } from "@app/_api/main/getTxMethod/utils/divideTimeIntoUnits";

const CaTapInfo: React.FC<ICaTxListProps> = ({ caTxList }) => {
  const isRendered = useHydration();
  const caTxFilterList: ICaTxList[] = caTxList.map(
    ({ Timestamp, blocknumber, Method, from, to, hash, value }, index) => {
      return {
        age: divideTimeIntoUnits(Number(Timestamp)),
        blocknumber: blocknumber.toString(),
        from,
        method: Method,
        to,
        txHash: hash,
        value,
      };
    }
  );
  return (
    <>
      {isRendered && (
        <div>
          <TxListWrap txList={caTxFilterList} lastName="Value" />
        </div>
      )}
    </>
  );
};

export default CaTapInfo;

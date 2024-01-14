"use client";
import TxListWrap from "@app/_components/transactionTable";
import { ItxList } from "@app/_components/transactionTable/interface";
import React, { useState } from "react";
import InfoTapContent from "./InfoTapContent";
import HoldersList from "@app/_components/holdersTable";
import DexList from "@app/_components/dexTradeTable";
import TabButton from "@app/_components/tabComponent/Tab";
import useHydration from "@app/_hooks/useHydration";
import { ITokenDetailDataProps } from "../../interface";
import useFilterTx from "@app/_hooks/useFilterTx";

const TokenTapInfo: React.FC<ITokenDetailDataProps> = ({ tokenItemData }) => {
  const isRendered = useHydration();
  const addressData:Array<string> = useFilterTx(tokenItemData.txs);
  const tokenTransferDataList: ItxList[] = tokenItemData.txs.map(
    ({ hash, Method, blocknumber, from, to, value, Timestamp }) => {
      return {
        txHash: hash,
        method: Method,
        blocknumber: blocknumber.toString(),
        from,
        to,
        value,
        age: Timestamp,
      };
    }
  );
  const [toggleLabelNum, setToggleLabelNum] = useState<string | null>(
    "Transfers"
  );

  const toggleHandler = (label: string) => {
    setToggleLabelNum(label);
  };

  const componentHandler = (label: string) => {
    if (label === "Transfers") {
      return <TxListWrap txList={tokenTransferDataList} lastName="Item" />;
    } else if (label === "Info") {
      return (
        <div>
          <InfoTapContent
            VolumeContent="VolumeContent"
            MarketContent="Market Contents"
            CirculatingContent="Circulating Contents"
          />
        </div>
      );
    } else if (label === "Dex Trades") {
      return (
        <DexList
          dexList={[
            {
              txHash: "0xdc238ae149",
              age: "26 secs ago",
              action: "Buy",
              tokenAmountOut: "4,537.272737 ",
              tokenAmountIn: "2.2196161432973 ",
              swappedRate: "2,044.17000241 ",
              txnValue: "$4,537.27",
              dex: "유니스왑",
            },
          ]}
        />
      );
    } else if (label === "holders") {
      return (
        <HoldersList
          holdersList={addressData}
        />
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      {isRendered && (
        <div>
          <div className="flex overflow-x-auto flex-nowrap py-3 mt-5 w-11/12 m-auto ">
            <TabButton
              label="Transfers"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
            <TabButton
              label="holders"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
            <TabButton
              label="Info"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
            <TabButton
              label="Dex Trades"
              toggleLabelNum={toggleLabelNum}
              toggleHandler={toggleHandler}
            />
          </div>
          {componentHandler(toggleLabelNum as string)}{" "}
        </div>
      )}
    </>
  );
};

export default TokenTapInfo;

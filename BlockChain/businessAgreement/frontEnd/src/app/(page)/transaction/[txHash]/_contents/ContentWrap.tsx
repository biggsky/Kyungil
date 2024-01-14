"use client";
import TabButton from "@app/_components/tabComponent/Tab";
import React, { useEffect, useState } from "react";
import TxOverViewMain from "./overView";
import TxLogsMain from "./logs";
import TxStateMain from "./state";
import { ITransactionDetailProps } from "../../interface";

const TxContentWrap: React.FC<ITransactionDetailProps> = ({
  transactionItemData,
}) => {
  const [toggleLabelName, setToggleLabelName] = useState<string | null>(
    "Over View"
  );
  const toggleHandler = (label: string) => {
    setToggleLabelName(label);
  };

  const componentHandler = (label: string) => {
    if (label === "Over View") {
      return <TxOverViewMain transactionItemData={transactionItemData} />;
    } else if (label === "Logs") {
      return <TxLogsMain eventLogDataList={transactionItemData.eventLog} />;
    } else {
      return <></>;
    }
  };
  return (
    <>
      {" "}
      <div className="flex overflow-x-auto flex-nowrap py-3 mt-5  m-auto w-11/12">
        <TabButton
          label="Over View"
          toggleLabelNum={toggleLabelName}
          toggleHandler={toggleHandler}
        />
        <TabButton
          label="Logs"
          toggleLabelNum={toggleLabelName}
          toggleHandler={toggleHandler}
        />
        <TabButton
          label="State"
          toggleLabelNum={toggleLabelName}
          toggleHandler={toggleHandler}
        />
      </div>
      {componentHandler(toggleLabelName as string)}
    </>
  );
};

export default TxContentWrap;

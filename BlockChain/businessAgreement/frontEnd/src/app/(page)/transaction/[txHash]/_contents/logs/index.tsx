import React from "react";
import LogContentWrap from "./ContentWrap";
import ItemTableWrap from "@app/_components/itemTable";
import { ITxDetailLogDataProps } from "@app/(page)/transaction/interface";

const TxLogsMain: React.FC<ITxDetailLogDataProps> = ({ eventLogDataList }) => {
  return (
    <ItemTableWrap>
      {eventLogDataList.map((el, index) => {
        return <LogContentWrap eventLogData={el} key={index} />;
      })}
    </ItemTableWrap>
  );
};

export default TxLogsMain;

"use client";
import React, { useState } from "react";
import ItemTableWrap from "../itemWrap";
import TxOverView from "./OverView";
import TxAction from "./Action";
import TxTransfer from "./Transfer";
import TxTransferToken from "./TransferToken";
import TxTransferNFT from "./TransferNFT";
import TxGasInfo from "./GasInfo";
import TxMoreDetail from "./MoreDetail";
import { ITransactionDetailProps } from "@app/(page)/transaction/interface";

const TxOverViewMain: React.FC<ITransactionDetailProps> = ({
  transactionItemData,
}) => {
  const [mordeDetailToggle, setMoreDetailToggle] = useState<boolean>(false);
  const moreDetailToggleHandler = () => {
    setMoreDetailToggle(!mordeDetailToggle);
  };
  return (
    <>
      {" "}
      <ItemTableWrap>
        <TxOverView transactionItemData={transactionItemData} />
        <TxAction transactionItemData={transactionItemData} />
        <TxTransfer transactionItemData={transactionItemData} />
        {transactionItemData.token_id && (
          <TxTransferToken transactionItemData={transactionItemData} />
        )}
        {transactionItemData.NFT_id && (
          <TxTransferNFT transactionItemData={transactionItemData} />
        )}

        <TxGasInfo transactionItemData={transactionItemData} />
      </ItemTableWrap>
      <ItemTableWrap>
        <TxMoreDetail
          mordeDetailToggle={mordeDetailToggle}
          moreDetailToggleHandler={moreDetailToggleHandler}
          transactionItemData={transactionItemData}
        />
      </ItemTableWrap>
    </>
  );
};

export default TxOverViewMain;

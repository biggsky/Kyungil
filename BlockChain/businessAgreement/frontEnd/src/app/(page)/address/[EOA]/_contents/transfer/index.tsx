import TxListWrap from "@app/_components/transactionTable";
import {
  ITxListProps,
  ItxList,
} from "@app/_components/transactionTable/interface";
import React from "react";

const AddressTransfer: React.FC<ITxListProps> = ({ txList, lastName }) => {
  return <TxListWrap txList={txList} lastName={lastName} />;
};

export default AddressTransfer
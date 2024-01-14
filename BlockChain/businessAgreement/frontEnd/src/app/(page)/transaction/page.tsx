import React from "react";
import TxListWrap from "@app/_components/transactionTable";
import { ItxList } from "@app/_components/transactionTable/interface";
import useHydration from "@app/_hooks/useHydration";
import TxListTitle from "@app/_components/itemTitle";
import TransactionListWrap from "./_contents/ListWrap";
import { getTransaction } from "@app/_api/main/getTransaction";
import Error from "@app/_components/error";

const Page = async () => {
  const transactionData = await getTransaction("list");
  if(!transactionData){
    return <Error />
  }
  return (
    <div>
      <TxListTitle title="Transaction List" />
      <TransactionListWrap transactionList={transactionData as ItxList[]} />
    </div>
  );
};

export default Page;

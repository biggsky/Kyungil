import React from "react";
import TokenTransferListWrap from "./_contents";
import Title from "@app/_components/itemTitle";
import { getTransaction } from "@app/_api/main/getTransaction";
import { ItxList } from "@app/_components/transactionTable/interface";
import Error from "@app/_components/error";

const Page = async() => {
  const tokenTransferDataList:ItxList[]=await getTransaction('token') as ItxList[];
  if(!tokenTransferDataList){
    return <Error />
  }
  return (
    <div className="dark:bg-black/90">
      <Title title="Token Transfers (ERC-20)"/>
      <TokenTransferListWrap tokenTransferDataList={tokenTransferDataList} />
    </div>
  );
};

export default Page;

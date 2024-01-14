"use client";
import React from "react";
import NftTxsListWrap from "@app/(page)/nftTrans/_content/ListWarp";
import { ITxListProps } from "@app/_components/transactionTable/interface";
import { INftTransList } from "@app/(page)/nftTrans/interface";
import useHydration from "@app/_hooks/useHydration";
import NftTransTitle from "@app/_components/itemTitle";
import { IAddressNFTTxList } from "@app/(page)/address/interface";


const AddressNftTransfer: React.FC<{NFTDataList:IAddressNFTTxList[],lastName:string}> = ({NFTDataList,lastName}) => {

  const isRendered = useHydration();
  return (
    <div className="dark:bg-black/90">
      {isRendered && (
        <NftTxsListWrap
          nftTxList={NFTDataList}
          maxHeight="1200px"
          pageStack={20}
        />
      )}
    </div>
  );
};

export default AddressNftTransfer;

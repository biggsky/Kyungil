import React from "react";
import AddressTitle from "./_contents/Title";
import AddressOverView from "./_contents/OverView";
import AddressMoreInfo from "./_contents/MoreInfo";
import { getAddress } from "@app/_api/address/getAddress";
import {
  IAddressContent,
  IAddressDetailData,
  IAddressMoreInfoTx,
  IAddresstxList,
} from "../interface";
import { divideTimeIntoUnits } from "@app/_api/main/getTxMethod/utils/divideTimeIntoUnits";
import Error from "@app/(page)/error/page";

const Page = async ({ params }: { params: { EOA: string } }) => {
  //값1 obj interface 는 너가 만든 address interface 정의를 해주세요
  //값2 해당 유저가 존재하는 모든 tx리스트 interface 는 IAddresstxList[]

  const addressData: IAddressDetailData = (await getAddress(
    params.EOA,
  )) as IAddressDetailData;
  if (!addressData) {
    return <Error />;
  }
  const addressOverViewData: IAddressContent = {
    ethBalance: addressData.ethBalance,
    firstTxnSentTimestamp: addressData.firstTxnSentTimestamp,
    lastTxnSentTimestamp: addressData.lastTxnSentTimestamp,
    txs: addressData.txs,
  };

  const addressTxList: IAddressMoreInfoTx[] = addressData.txs.map(
    (
      {
        Timestamp,
        blocknumber,
        from,
        to,
        Method,
        hash,
        value,
        NFT_id,
        token_id,
        NFTName,
        tokenName,
      },
      index,
    ) => {
      return {
        age: divideTimeIntoUnits(Number(Timestamp)),
        blocknumber: blocknumber.toString(),
        from,
        method: Method,
        to,
        txHash: hash,
        value,
        NFTId: NFT_id,
        tokenId: token_id,
        NFTName,
        tokenName,
      };
    },
  );


  return (
    <div className='bg-mainBackGroundColor dark:bg-black/90'>
      <AddressTitle title='Address' />
      <AddressOverView addressOverViewData={addressOverViewData} />
      <AddressMoreInfo addressTxList={addressTxList} />
    </div>
  );
};

export default Page;

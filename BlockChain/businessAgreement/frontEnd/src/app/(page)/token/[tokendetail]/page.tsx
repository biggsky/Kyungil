import React, { useEffect, useState } from "react";
import Title from "./_contents/Title";
import OverviewCard from "./_contents/OverviewCard";
import MarketCard from "./_contents/MarketCard";
import OtherInfoCard from "./_contents/OtherInfoCard";
import {
  ITokenDetail,
  ITokenDetailData,
  ITokenDetailProps,
} from "../interface";
import TokenItemTable from "./_contents/TokenItemTable";
import TokenTapInfo from "./_contents/TapInfo";
import { getToken } from "@app/_api/token/getToken";
import { getTokenDetail } from "@app/_api/token/getTokenDatail";
import Error from "@app/_components/error";

const Page: React.FC<ITokenDetailProps> = async ({ params }) => {
  const tokenItemData = (await getTokenDetail(
    params.tokendetail
  )) as ITokenDetailData;
  if(!tokenItemData){
    return <Error />
  }

  return (
    <div className="">
     
      <Title
        title={`Token`}
        subtitle={<span className="text-sm dark:text-white">#{params.tokendetail}</span>}
      />

      <div className=" flex flex-wrap min-w-[280px] mt-5 w-11/12 m-auto">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <TokenItemTable>
            <OverviewCard
              title="Overview"
              name={tokenItemData.name}
              symbol={tokenItemData.symbol}
            />
          </TokenItemTable>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <TokenItemTable>
            <MarketCard
              title="Market"
              circulatingSupply={tokenItemData.circulatingSupply}
              contractAddress={tokenItemData.contractAddress}
              ownerAddress={tokenItemData.ownerAddress}
            />
          </TokenItemTable>
        </div>
        <div className="w-full lg:w-1/3">
          <TokenItemTable>
            <OtherInfoCard
              title="Other Info"
              createdAt={tokenItemData.createdAt}
              decimal={tokenItemData.decimal.toString()}
            />
          </TokenItemTable>
        </div>
      </div>
      <div className="w-11/12 m-auto">
        <TokenTapInfo tokenItemData={tokenItemData}  />
      </div>
    </div>
  );
};

export default Page;

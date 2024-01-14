import React from "react";
import { getCa } from "@app/_api/ca/getCa";
import CaItemTable from "./_contents/TokenItemTable";
import CaOverviewCard from "./_contents/OverviewCard";
import CaMarketCard from "./_contents/MarketCard";
import CaOtherInfoCard from "./_contents/OtherInfoCard";
import CaTapInfo from "./_contents/TapInfo";
import CaTitle from "./_contents/Title";
import { ICaDetailData } from "../interface";
import Error from "@app/_components/error";

const Page = async ({
  params,
}: {
  params: {
    caAddress: string;
  };
}) => {
  const caData: ICaDetailData = (await getCa(
    params.caAddress
  )) as ICaDetailData;

  if(caData ===null){
    return <Error/>
  }

  return (
    <div className="dark:bg-black/90">
      <CaTitle
        title={`Token`}
        subtitle={<span className="text-sm">#{params.caAddress}</span>}
      />
      <div className="dark:bg-datkMode-wrapBG flex flex-wrap min-w-[280px] mt-5 w-11/12 m-auto">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <CaItemTable>
            <CaOverviewCard title="Type" caType={caData.CAtype} />
          </CaItemTable>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <CaItemTable>
            <CaMarketCard
              title="ABI Signature"
              abiSigniture={caData.abiSigniture}
            />
          </CaItemTable>
        </div>
        <div className="w-full lg:w-1/3">
          <CaItemTable>
            <CaOtherInfoCard
              title="Signiture Names"
              signitureNames={caData.signitureNames}
            />
          </CaItemTable>
        </div>
      </div>
      <div className="w-11/12 m-auto">
        <CaTapInfo caTxList={caData.txs} />
      </div>
    </div>
  );
};

export default Page;

import React from "react";
import { IBlockDetailData, IBlocksDetailProps } from "../interface";
import { BlockCard } from "../_contents/Card";
import Title from "./_contents/Title";
import BlockInfo from "./_contents/Info";
import BlockDiffcultyInfo from "./_contents/DiffcultyInfo";
import BlockGasInfo from "./_contents/GasInfo";
import MoreInfo from "./_contents/MoreInfo";
import { getBlockItemData } from "@app/_api/blockDetail/getBlockItemData";
import Error from "@app/_components/error";
const Page: React.FC<IBlocksDetailProps> = async ({ params }) => {
  const blockData: IBlockDetailData = (await getBlockItemData(
    params.blockdetail
  )) as IBlockDetailData;
  if (!blockData) {
    return <Error />;
  }
  return (
    <div>
        <div className="w-full">
          <Title
            title={`Block `}
            subtitle={<span className="text-sm">#{blockData.blockNumber}</span>}
          />
        </div>
      <div className="py-5">
        <BlockCard>
          <BlockInfo
            blockHeight={blockData.blockNumber}
            status={blockData.status ? "Success" : "Failed"}
            timeStamp={blockData.timeStamp}
            transaction={blockData.txCount}
          />
          <BlockDiffcultyInfo
            feeRecipient={`${blockData.feeRecipient.slice(
              0,
              4
            )} ... ${blockData.feeRecipient.slice(-4)}`}
            totalDifficulty={blockData.difficulty}
          />
          <BlockGasInfo
            gasUsed={blockData.gas}
            gasLimit={blockData.gasLimit}
            baseFeePerGas={blockData.baseFeePerGas}
            extraData={blockData.extraData}
          />
        </BlockCard>
        <BlockCard>
          <MoreInfo
            hash={blockData.hash}
            parentHash={blockData.parentHash}
            stateRoot={blockData.stateRoot}
            withdrawsRoot={blockData.withdrawalsRoot}
            nonce={blockData.nonce}
          />
        </BlockCard>
      </div>
    </div>
  );
};

export default Page;

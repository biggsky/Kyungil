import React from "react";
import { IBlocksGasProps } from "../../interface";
import BlockCardText from "./CardText";


const GasInfo: React.FC<IBlocksGasProps> = ({
  gasUsed,
  gasLimit,
  baseFeePerGas,
  extraData,
}) => {
  return (
    <div className=" border-gray dark:text-white">
        <BlockCardText title="Gas Used:" content={gasUsed}>
        </BlockCardText>
      <BlockCardText title="Gas Limit:" content={gasLimit} />
      <BlockCardText title="Base Fee Per Gas:" content={baseFeePerGas} />
      <BlockCardText title="Extra Data:" content={extraData} />
    </div>
  );
};

export default GasInfo;

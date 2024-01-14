import React from "react";
import TxInputData from "./InputData";
import { IMordeDetailToggleProps } from "@app/(page)/transaction/interface";

const TxOnMoreDetail: React.FC<IMordeDetailToggleProps> = ({
  mordeDetailToggle,
  moreDetailToggleHandler,
  transactionItemData,
}) => {
  return (
    <div className="w-full h-auto flex flex-col   pb-5 relative dark:bg-black dark:text-white">
      {/* 애니메이션 */}
      <div
        className={`${
          mordeDetailToggle
            ? "  sm:h-[400px] md:h-[380px] lg:h-[300px]"
            : "h-0 overflow-hidden "
        } relative overflow-hidden transition-all duration-500 z-0 `}
      >
        <div className="w-full h-72 min-h-72 flex relative z-0  flex-col">
          <div className="lg:flex lg:items-center">
            <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px] ">
              Gas Limit & Usage by Txn:
            </div>
            <div className="p-1 h-auto text-xs break-words text-itemDetail-txGasInfoColor  lg:ml-10 dark:text-white ">
              <span className="">{transactionItemData.gas}</span>{" "}
            </div>
          </div>
          <div className="lg:flex lg:items-center">
            {" "}
            <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
              Gas Fees:
            </div>
            <div className="p-1 lg:ml-10">
              <span className="text-sm text-itemDetail-textLabelColor">
                Base:
              </span>{" "}
              <span className="text-xs dark:text-white">
                {" "}
                {transactionItemData.gas} Gwei
              </span>
              <span className="border-r-2 mx-3  border-txDetail-moreDetailBorderRight"></span>
              <span className="text-sm text-itemDetail-textLabelColor">
                Max:
              </span>{" "}
              <span className="text-xs dark:text-white">
                {" "}
                {transactionItemData.maxFeePerGas}Gwei
              </span>
              <span className="border-r-2 mx-3  border-txDetail-moreDetailBorderRight"></span>
              <span className="text-sm text-itemDetail-textLabelColor">
                Max Priority:
              </span>{" "}
              <span className="text-xs dark:text-white">
                {transactionItemData.maxPriorityFeePerGas}Gwei
              </span>
            </div>
          </div>
          <div className="w-full lg:flex lg:items-center ">
            <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px] dark:text-white">
              Input Data:
            </div>
            <div className="  flex flex-col sm:w-full sm:m-auto lg:w-2/3 ">
              <TxInputData transactionItemData={transactionItemData}/>
            </div>
          </div>
        </div>
      </div>

      {/* 애니메이션 */}
      <div
        className={`${
          mordeDetailToggle ? "mt-5" : "bg-white"
        } w-full flex items-center relative  h-16  z-5  transition-all  justify-between dark:bg-black`}
      >
        <div className="text-sm font-medium lg:text-itemDetail-textLabelColor  dark:text-white">
          More Detail
        </div>
        <div
          className=" text-text-mainTextColor cursor-pointer text-sm lg:ml-8 "
          onClick={moreDetailToggleHandler}
        >
          {mordeDetailToggle ? "-" : "+"} Click To Show More
        </div>
      </div>
    </div>
  );
};

export default TxOnMoreDetail;

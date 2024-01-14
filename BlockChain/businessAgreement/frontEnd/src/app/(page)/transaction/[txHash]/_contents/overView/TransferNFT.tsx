import { ITransactionDetailProps } from "@app/(page)/transaction/interface";
import { fromWeiToETH } from "@app/_api/main/getTxMethod/utils/fromWeiToETH";
import React from "react";

const TxTransferNFT: React.FC<ITransactionDetailProps> = ({
  transactionItemData,
}) => {
  const addressEncodeHandler = (address: string) => {
    return (
      address.substring(0, 4) + "...." + address.substring(address.length - 4)
    );
  };
  const filterT0 = (time: string) => {
    let indexOfTOO = time.indexOf("T0");
    if (indexOfTOO !== -1) {
      time = time.substring(0, indexOfTOO);
    }
    return time;
  };

  const jsonToObj = (returnValues: string) => {
    return JSON.parse(returnValues);
  };

  const methodValidateFromHandler = (returnValues: string) => {
    return {
      title: transactionItemData.method === "transfer" ? "from" : "owner",
      ca: addressEncodeHandler(
        transactionItemData.method === "transfer"
          ? jsonToObj(returnValues).from
          : jsonToObj(returnValues).owner
      ),
    };
  };
  const methodValidateToHandler = (returnValues: string) => {
    return {
      title: transactionItemData.method === "transfer" ? "To" : "spender",
      ca: addressEncodeHandler(
        transactionItemData.method === "transfer"
          ? jsonToObj(returnValues).to
          : jsonToObj(returnValues).spender
      ),
    };
  };

  const methodValue = (returnValues: string) => {
    return fromWeiToETH(jsonToObj(returnValues).value);
  };
  return (
    <div className="w-full h-auto p-2 border-b border-gray pb-5 lg:flex lg:items-center dark:text-white">
      <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
        ERC-721 Tokens Transferred:
      </div>
      <div className="w-1/3 lg:ml-10">
        {transactionItemData.eventLog.map((el, index) => {
          return (
            <p key={index}>
              <span className="text-sm sm:inline-block">
                <span className=" text-itemDetail-inventoryKeyColor">
                  ERC-721
                </span>
                <span className="ml-2">Block Number[</span>
                <span className="text-text-mainTextColor truncate">
                  {el.blockNumber}
                </span>
                <span>]</span>
                <span className="text-text-mainTextColor truncate ml-2"></span>
              </span>
              {/* <br /> */}
              <span className="sm:inline-block">
                <span className="font-medium text-sm lg:ml-1">
                  {methodValidateFromHandler(el.returnValues).title}
                </span>
                <span className="text-text-mainTextColor text-xs ml-2">
                  {methodValidateFromHandler(el.returnValues).ca}
                </span>
                <span className="font-medium  text-sm ml-2 ">
                  {methodValidateToHandler(el.returnValues).title}
                </span>
              </span>

              {/* <br /> */}
              <span className="text-text-mainTextColor text-xs lg:ml-1">
                {methodValidateToHandler(el.returnValues).ca}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TxTransferNFT;

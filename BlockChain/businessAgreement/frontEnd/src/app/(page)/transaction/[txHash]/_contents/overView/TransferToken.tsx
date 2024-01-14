"use client";
import { ITransactionDetailProps } from "@app/(page)/transaction/interface";
import { fromWeiToETH } from "@app/_api/main/getTxMethod/utils/fromWeiToETH";
import { IEventLogData } from "@app/_api/txDetail/interface";
import React, { useEffect } from "react";

const TxTransferToken: React.FC<ITransactionDetailProps> = ({
  transactionItemData,
}) => {
  const addressEncodeHandler = (address: string) => {
    if (!address) {
      return "N/A"; // or any other default/fallback value
    }
    return (
      address.substring(0, 4) + "...." + address.substring(address.length - 4)
    );
  };
  const jsonToObj = (returnValues: string) => {
    // console.log(returnValues)
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
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5 dark:text-white">
      <div className="flex sm:flex-col md:flex-col ">
        <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
          ERC-20 Tokens Transferred:
        </div>
        <div className="w-2/3 lg:ml-10 dark:text-white">
          {transactionItemData.eventLog.map((el, index) => {
            return (
              <div className="w-full h-auto p-2" key={index}>
                <p className="">
                  <span className="sm:inline-block">
                    <span className="font-medium text-sm ">
                      {methodValidateFromHandler(el.returnValues).title}
                    </span>{" "}
                    <span className="text-text-mainTextColor text-xs">
                      {methodValidateFromHandler(el.returnValues).ca}
                    </span>
                    <span className="font-medium ml-1 text-sm ">
                      {methodValidateToHandler(el.returnValues).title}
                    </span>
                  </span>
                  <span className="ml-1 sm:inline-block">
                    {/* <br /> */}
                    <span className="text-text-mainTextColor text-xs">
                      {methodValidateToHandler(el.returnValues).ca}
                    </span>
                    <span className="font-medium text-sm ml-1">For</span>
                    <span className="text-xs ml-1">
                      {methodValue(el.returnValues)}ETH
                    </span>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TxTransferToken;

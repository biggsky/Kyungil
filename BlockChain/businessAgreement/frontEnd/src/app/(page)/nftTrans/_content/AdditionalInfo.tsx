/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IAdditionalInfoProps } from "../interface";

const AdditionalInfo: React.FC<IAdditionalInfoProps> = ({
  addInfoTempData,
  toggleHandler,
}) => {
  return (
    <div className=" fixed top-0 left-0 z-30 w-screen h-screen bg-modalBackgroundColor flex justify-center items-center  border-b border-gray  ">
      <div className="z-40 border-1 border-black w-80 h-96 rounded-lg p-4 bg-white overflow-scroll absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex w-full justify-between items-center h-1/6">
          <div className="text-lg font-bold">Additional Info</div>
          <img
            width={20}
            height={20}
            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-cross-icon-png-image_925896.jpg"
            alt="x이미지"
            onClick={toggleHandler}
          />
        </div>
        <div className="flex flex-col w-full text-sm h-1/5 border-b justify-center">
          <div className="">Status:</div>
          <div className="flex w-full justify-between">
            <span>{addInfoTempData.status}</span>
            <span>{addInfoTempData.blockNum} Block Confirmation</span>
          </div>
        </div>
        <div className="flex flex-col w-full text-sm h-1/5 border-b justify-center">
          <div className="">TransactionFee:</div>
          <div className="flex w-full justify-between">
            <span>{addInfoTempData.transactionFee}ETH</span>
            <span>$0.00</span>
          </div>
        </div>
        <div className="flex flex-col w-full text-sm h-1/5 border-b justify-center">
          <div className="">Gas Info:</div>
          <div className=" w-full text-xs">
            <div>
              {addInfoTempData.gasInfo} gas used from {addInfoTempData.gasLimit}{" "}
              limit
            </div>
            <div>@0.0000000000000000004843ETH(0.000004834Gwei)</div>
          </div>
        </div>
        <div className="flex flex-col w-full text-sm h-1/5 border-b justify-center">
          <div className="">Nonce:</div>
          <div className="flex w-full justify-between">
            <span>{addInfoTempData.nonce}</span>
            <span>(in the position {addInfoTempData.position})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;

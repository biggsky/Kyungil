"use client";

import ItemTableWrap from "@app/_components/itemTable";
import React, { useState } from "react";
import { IAddressContent, IAddressTableProps } from "../../interface";
import { DropDown } from "./DropDown";
import { DropDownItem } from "./DropDowmItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const weiToEther = (wei: number): string => {
  const ether = (wei / 10 ** 18).toFixed(5); // Convert to ether with 5 decimal places
  return ether.toString(); // Convert the result to string explicitly
};

const AddressOverView: React.FC<{ addressOverViewData: IAddressContent }> = ({
  addressOverViewData,
}) => {
  const ethBalanceInEther: string = weiToEther(
    Number(addressOverViewData.ethBalance)
  );
  const firstTx = addressOverViewData.txs[0];
  const firstTxHash = firstTx.hash;

  const lastTxIndex = addressOverViewData.txs.length - 1;
  const lastTx = addressOverViewData.txs[lastTxIndex];
  const lastTxHash = lastTx.hash;

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className="mt-10">
      <ItemTableWrap>
        <div className="w-full h-auto flex flex-col  pb-5">
          <div className="font-semibold">Overview</div>
          <div className="flex flex-col">
            <div className="lg:flex lg:items-center">
              <div className=" p-2 text-itemDetail-textLabelColor lg:w-[250px] text-sm">
                ETH BALLANCE:
              </div>
              <div className="p-2 h-auto text-sm   w-60 sm:break-words lg:ml-8 md:break-words ">
                <span>{ethBalanceInEther} ETH</span>
              </div>
            </div>
            <div className="lg:flex lg:items-center">
              <div className="p-2 text-itemDetail-textLabelColor lg:w-[250px] text-sm">
                LAST TXN SENT:
              </div>
              <div className="p-2 h-auto text-sm flex  w-80 sm:break-words lg:ml-8 md:break-words">
                <Link href={`/transaction/${lastTxHash}`}>
                  <div className="text-text-mainTextColor w-40 truncate">
                    {lastTxHash}
                  </div>
                </Link>
                <div className="text-itemDetail-textLabelColor">
                  {addressOverViewData.lastTxnSentTimestamp}
                </div>
              </div>
            </div>

            <div className="lg:flex lg:items-center">
              <div className="p-2 text-itemDetail-textLabelColor lg:w-[250px] text-sm">
                FRIST TXN SENT:
              </div>
              <div className="p-2 h-auto text-sm flex  sm:w-80 sm:break-words lg:ml-8  lg:w-96">
                <Link href={`/transaction/${firstTxHash}`}>
                  <div className="text-text-mainTextColor w-40 truncate">
                    {firstTxHash}
                  </div>
                </Link>
                <div className="text-itemDetail-textLabelColor">
                  {addressOverViewData.lastTxnSentTimestamp}
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-2 text-itemDetail-textLabelColor  text-sm">
                TOKEN HOLDINGS
              </div>
              <div
                onClick={toggleDropdown}
                className={`border border-gray ${
                  isDropdownVisible ? "bg-gray" : "hover:bg-gray"
                } relative h-auto rounded text-sm p-2`}
              >
                0.00ETH(26 Tokens)
                <button className="absolute right-5">
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ItemTableWrap>
      {isDropdownVisible && (
        <DropDown>
          <DropDownItem
            title="0x5555.com()"
            maxTotalSupply="55555555555555555555"
          />
        </DropDown>
      )}
    </div>
  );
};

export default AddressOverView;

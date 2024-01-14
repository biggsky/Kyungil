/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IAddInfo, ItxList, ITxListProps } from "./interface";
import { createPortal } from "react-dom";
import AdditionalInfo from "./AdditionalInfo";
import TxList from "./TxListContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";

const TxListWrap: React.FC<ITxListProps> = ({
  txList,
  lastName,
  pageStack = 20,
}) => {
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } = usePagination<ItxList>(
    txList,
    pageStack
  );

  useEffect(() => {
    setAddInfoModal(document.getElementById("portal"));
  }, [isToggled]);

  // 실제에서는 react-query로 가져올 예정
  const [addInfoTempData, setAddInfoTempData] = useState<IAddInfo>({
    status: "Success",
    transactionFee: "0.0000000000231",
    gasInfo: "293840",
    gasLimit: "318840",
    nonce: "0",
    blockNum: "18497",
    position: "18",
  });

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div
      className={`w-11/12 m-auto rounded-lg shadow-md min-w-[250px] max-w-[1250px] h-auto bg-white max-h-[3000px] dark:bg-black my-10 `}
    >
      <div
        className={`overflow-x-scroll overflow-y-hidden h-auto max-h-[3000px] dark:text-white`}
      >
        <table className="w-full m-auto">
          <thead>
            <tr className="h-[50px] border-b border-gray flex text-sm">
              <th className="min-w-[60px] flex items-center justify-center">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </th>
              <th className="min-w-[200px] flex justify-start items-center">
                Txn Hash
              </th>
              <th className="min-w-[120px] flex items-center ml-[50px]">
                Method
              </th>
              <th className="min-w-[100px] flex items-center ml-[20px] ">
                Block
              </th>
              <th className="min-w-[110px] flex items-center ">
                Age
              </th>
              <th className="min-w-[120px] flex items-center  ml-[20px]">
                From
              </th>
              <th className="w-20 sm:w-[50px] md:w-[100px]  lg:w-[150px]"></th>
              <th className="min-w-[120px] lg:w-44 flex items-center">To</th>
              <th className="min-w-[100px] flex justify-start items-center ml-[20px]">
                {lastName}
              </th>
            </tr>
          </thead>
          <tbody>
            <TxList pageTxList={pageTxList} toggleHandler={toggleHandler} />
          </tbody>
        </table>
        {isToggled && addInfoModal
          ? createPortal(
              <AdditionalInfo
                addInfoTempData={addInfoTempData}
                toggleHandler={toggleHandler}
              />,
              addInfoModal
            )
          : ""}
      </div>
      <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
    </div>
  );
};

export default TxListWrap;

/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { INftAddInfo, INftTransList, INftTxListProps } from "../interface";
import { createPortal } from "react-dom";
import AdditionalInfo from "./AdditionalInfo";
import NftTxsList from "./Container";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCircleRight } from "@fortawesome/free-regular-svg-icons";


const NftTxListWrap: React.FC<INftTxListProps> = ({
  nftTxList,
  maxHeight = "900px",
  pageStack = 25,
}) => {
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } = usePagination<INftTransList>(
    nftTxList,
    pageStack
  );

  useEffect(() => {
    setAddInfoModal(document.getElementById("portal"));
  }, [isToggled]);

  // 실제에서는 react-query로 가져올 예정
  const [addInfoTempData, setAddInfoTempData] = useState<INftAddInfo>({
    status: "Success",
    transactionAction:"Mint 3 of", 
    transactionFee: "0.0000000000231",
    gasInfo: "293840",
    nonce: "0",
  });

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div
      className={`w-11/12 m-auto rounded-lg shadow-md min-w-[250px] max-w-[1250px] h-auto bg-white max-h-[3000px] dark:bg-black my-10 `}
    >
      <div className={`overflow-x-scroll overflow-y-hidden h-auto max-h-[3000px] dark:text-white`}>
        <table className="w-full m-auto">
          <thead>
            <tr className="h-[50px] border-b border-gray flex text-sm">
              <th className="min-w-[80px] w-auto flex items-center justify-center font-medium p-2">
              <FontAwesomeIcon icon={faCircleQuestion} />
              </th>
              <th  className="min-w-[200px] flex justify-start items-center">
                Transaction Hash
              </th>
              <th className="min-w-[120px] ml-2 flex items-center">
                Method
              </th>
              <th className="min-w-[100px] w-[200px]  flex items-center">
                Age
              </th>
              <th className="min-w-[200px]  flex items-center">
                From
              </th>
              <th className="min-w-[200px]  flex items-center">
                To
              </th>
              <th className="min-w-[150px] flex items-center">
                Type
              </th>
              <th className="min-w-[300px] p-2 flex items-center">
                Item
              </th>
              {/* <th className="min-w-[100px] flex justify-start items-center  font-medium">
                {lastName}
              </th> */}
            </tr>
          </thead>
          <tbody>
            <NftTxsList pageTxList={pageTxList} toggleHandler={toggleHandler} />
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

export default NftTxListWrap;

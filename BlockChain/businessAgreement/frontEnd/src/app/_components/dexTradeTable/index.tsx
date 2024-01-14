/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IAddInfo, IdexList, DexListProps } from "./interface";
import { createPortal } from "react-dom";
import AdditionalInfo from "./AdditionalInfo";
import DexList from "./DexListContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

const DexListWrap: React.FC<DexListProps> = ({ dexList }) => {
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<IdexList>(dexList);

  useEffect(() => {
    setAddInfoModal(document.getElementById("portal"));
  }, [isToggled]);
  

  // 실제에서는 react-query로 가져올 예정
  const [addInfoTempData, setAddInfoTempData] = useState<IAddInfo>({
    status: "Success",
    transactionAction: "2.219616143297300157",
    transactionFee: "0.00478866704634 ETH ",
    gasInfo: "168,776 ",
    gasLimit: "312,905 ",
    nonce: "9",
    position: "18",
  });

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="mt-5 w-11/12 m-auto rounded-lg shadow-md h-auto bg-white max-h-[600px]">
      <div className="overflow-x-auto h-auto max-h-[500px]">
        <table className="w-full">
          <thead>
            <tr className="h-[50px] border-b border-gray flex text-sm">
              <th className="min-w-[60px] flex items-center justify-center text-sm">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </th>
              <th className="min-w-[200px] flex justify-start items-center text-sm">
                Txn Hash
              </th>
              <th className="min-w-[200px] flex items-center text-sm">
                Age
              </th>
              <th className="min-w-[100px] flex items-center text-sm">
                Action
              </th>
              <th className="min-w-[200px] flex items-center text-sm">
                Token Amount (Out)
              </th>
              <th className="min-w-[200px] flex justify-start items-center text-sm">
                Token Amount (In)
              </th>
              <th className="min-w-[200px] flex justify-start items-center text-sm">
                Swapped Rate
              </th>
              <th className="min-w-[150px] flex justify-start items-center text-sm">
                Txn Value ($)
              </th>
              <th className="min-w-[50px] flex justify-start items-center text-sm">
                Dex
              </th>
            </tr>
          </thead>
          <tbody>
            <DexList pageTxList={pageTxList} toggleHandler={toggleHandler} />
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
          : null}
      </div>
      <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage}  />
    </div>
  );
};

export default DexListWrap;

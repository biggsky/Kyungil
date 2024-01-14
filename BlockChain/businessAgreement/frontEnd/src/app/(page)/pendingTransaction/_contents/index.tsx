/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IPendingTransaction } from "./interface";
import { createPortal } from "react-dom";
import TxList from "./TxListContainer";
import Title from "@app/_components/itemTitle";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
import useHydration from "@app/_hooks/useHydration";

const PendingTxListWrap = () => {
  const isRendered = useHydration();
  const tempDataArr: IPendingTransaction[] = Array.from(
    { length: 105 },
    (ele, index) => ({
      txHash:
        "0x966fb52cc296a93a538ee12d32994cefbc31452d8391bf8e60b8bfda2a3b5d9c",
      method: "Transfer",
      nonce: "47",
      lastSeen: "less than 1 sec ago",
      gasLimit: "21000",
      gasPrice: "0",
      from: "0x3910c18C2D886CC6c18918C197aF4A28563b3Ccd",
      to: "0xECEaFC653dac2f554129d6ec32ce05971A604616",
      amount: "0",
    })
  );
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<IPendingTransaction>(tempDataArr, 50);

  useEffect(() => {
    setAddInfoModal(document.getElementById("portal"));
  }, [isToggled]);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="dark:bg-black/90 dark:text-white">
      <Title title="Pending Transactions" />
      {isRendered && (
        <div
          className={`my-10 w-11/12 m-auto rounded-lg shadow-md min-w-[250px] max-w-[1250px]  h-auto bg-white dark:bg-black`}
        >
          <div className={`h-auto overflow-x-scroll`}>
            <table className="w-full m-auto">
              <thead className="">
                <tr className="h-20 border-b border-gray flex text-sm">
                  <th className=" flex justify-start items-center min-w-[240px] px-5">
                    Txn Info
                  </th>
                  <th className=" flex items-center min-w-[150px]">Method</th>
                  <th className=" flex items-center min-w-[100px]  ">Nonce</th>
                  <th className=" flex items-center min-w-[150px] ">Last Seen</th>
                  <th className=" flex items-center min-w-[100px]">Gas Limit</th>
                  <th className=" flex items-center min-w-[100px]">Gas Price</th>
                  <th className=" flex items-center  lg:w-44  min-w-[130px] ">
                    From
                  </th>
                  <th>
                    <div className="min-w-[20px] sm:mr-[15px] md:mr-[20px] lg:mr-[30px]"></div>
                  </th>
                  <th className=" flex items-center  min-w-[150px] lg:w-64">
                    To
                  </th>
                  <th className=" flex justify-start items-center min-w-[100px] ">Amount</th>
                </tr>
              </thead>
              <tbody>
                <TxList pendingTransactionData={pageTxList} />
              </tbody>
            </table>
          </div>
          <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
        </div>
      )}
    </div>
  );
};

export default PendingTxListWrap;

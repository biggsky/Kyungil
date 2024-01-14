import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import { INftAListOA } from "../../interface";
import PageTxnList from "./PageTxnList";

import { createPortal } from "react-dom";
import { IAddInfo } from "@app/_components/transactionTable/interface";
import AdditionalInfo from "./AdditionalInfo";



const NftAList: React.FC<INftAListOA> = ({ pageTxList }) => {
  const [addInfoModal, setAddInfoModal] = useState<Element | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  useEffect(() => {
    setAddInfoModal(document.getElementById("portal"));
  }, [isToggled]);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  const [addInfoTempData, setAddInfoTempData] = useState<IAddInfo>({
    status: "Success",
    transactionFee: "0.0000000000231",
    gasInfo: "293840",
    gasLimit: "318840",
    nonce: "0",
    blockNum: "18497",
    position: "18",
  });


  return (
    <div className='overflow-x-scroll'>
      <table className='w-full'>
        <thead className='border-gray border-b-[1px]'>
          <tr className='h-[50px] text-left text-sm dark:text-white'>
            <th className='text-center'>
              <FontAwesomeIcon
                className='border-transparent p-[10px] border-[1px]'
                icon={faCircleQuestion}
              />
            </th>
            <th>Txn Hash</th>
            <th>Age</th>
            <th>Action</th>
            <th>From</th>
            <th></th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          <PageTxnList pageTxList={pageTxList} toggleHandler={toggleHandler} />
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
  );
};

export default NftAList;

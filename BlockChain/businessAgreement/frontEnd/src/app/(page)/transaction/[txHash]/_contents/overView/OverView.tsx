import React from "react";
import copy from "public/copy.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCopy } from "@fortawesome/free-regular-svg-icons";
import { ITransactionDetailProps } from "@app/(page)/transaction/interface";
import WordBallon from "@app/_components/wordBallon";
const TxOverView: React.FC<ITransactionDetailProps> = ({
  transactionItemData,
}) => {
  const clock =
    "https://w7.pngwing.com/pngs/712/835/png-transparent-computer-icons-clock-icon-design-clock-time-rim-timer.png";
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5 dark:text-white ">
      <div className="flex flex-col">
        <div className="lg:flex lg:items-center">
          {" "}
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            Transaction Hash:
          </div>
          <div className="p-1 h-auto text-xs w-80 sm:break-words lg:ml-8 md:break-words dark:text-white flex break-words">
            {transactionItemData.txHash}
            <div className="ml-3">
            <WordBallon copyValue={transactionItemData.txHash} />
          </div>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            Status:
          </div>
          <div
            className={`${
              transactionItemData.status
                ? "border-green-600 bg-green-200 text-green-600"
                : "border-red-600 bg-red-200 text-red-600"
            } text-xs px-1 py-1   flex justify-center items-center rounded-lg border-2  sm:w-16 md:w-16 lg:ml-8  lg:h-7`}
          >
            {transactionItemData.status ? "Success" : "Fail"}
          </div>{" "}
        </div>

        <div className="lg:flex lg:items-center">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            Time Stamp
          </div>
          <div className="flex flex-col ml-8 dark:text-white">
            <div className="flex">
              <FontAwesomeIcon icon={faClock} />
              {/* <img
                className="m-1 max-h-[10px]"
                src={clock}
                alt="시계 아이콘"
                width={15}
                height={3}
              />{" "} */}
              <span className="ml-[5px] text-xs ">
                {transactionItemData.timeStamp}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxOverView;

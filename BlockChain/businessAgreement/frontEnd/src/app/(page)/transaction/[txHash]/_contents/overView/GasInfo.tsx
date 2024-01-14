import { ITransactionDetailProps } from "@app/(page)/transaction/interface";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TxGasInfo: React.FC<ITransactionDetailProps> = ({transactionItemData}) => {
  const etherIcon =
    "https://w7.pngwing.com/pngs/889/143/png-transparent-ethereum-computer-icons-cryptocurrency-blockchain-valentines-day-party-miscellaneous-angle-triangle.png";
  return (
    <div className="w-full h-auto flex flex-col pb-5 dark:text-white">
      <div className="flex flex-col">
        <div className="lg:flex lg:items-center">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px] ">
            Value:
          </div>
          <div className="p-1 h-auto text-xs break-words  w-fit text-itemDetail-txGasInfoColor flex justify-around lg:ml-10 dark:text-white">
            {/* <img src={etherIcon} alt="이더 아이콘" className="w-5 h-5 " /> */}
            <FontAwesomeIcon icon={faEthereum} />
            <div className="ml-3">{transactionItemData.value}ETH</div>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          {" "}
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            Transaction Fee:
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-xs p-1 text-itemDetail-txGasInfoColor lg:ml-10 dark:text-white">
                {transactionItemData.transactionFee}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px] dark:text-white">
            Gas Fee:
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-xs p-1 text-itemDetail-txGasInfoColor lg:ml-10 dark:text-white">
               {transactionItemData.gas}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxGasInfo;

import { ITransactionDetailProps } from "@app/(page)/transaction/interface";
import React from "react";

const TxAction: React.FC<ITransactionDetailProps> = ({
  transactionItemData,
}) => {
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5 dark:text-white">
      <div className="flex sm:flex-col ">
        <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
          Transaction Action:
        </div>
        <div className="p-1 h-10 text-xs lg:ml-7  ">
          <div className="w-44 p-1   truncate dark:text-white">
            <div className="w-fit text-sm font-semibold py-1 px-2 border-2 border-gray rounded-md">
              {transactionItemData.method}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxAction;

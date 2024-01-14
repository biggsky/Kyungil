import {
  ITransactionDetailData,
  ITransactionDetailProps,
} from "@app/(page)/transaction/interface";
import React from "react";

const TxInputData: React.FC<ITransactionDetailProps> = ({
  transactionItemData,
}) => {
  return (
    <div className="overflow-scroll p-2 m-auto rounded-md  border-2 border-gray bg-txDetail-inputData sm:w-full sm:h-52 md:h-52 md:w-11/12 lg:w-11/12 lg:h-52">
      {transactionItemData.input}
    </div>
  );
};

export default TxInputData;

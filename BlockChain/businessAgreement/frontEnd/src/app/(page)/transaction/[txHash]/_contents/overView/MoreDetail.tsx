import React from "react";
import TxOnMoreDetail from "./OnMoreDetail";
import TxOffMoreDetail from "./OffMoreDetail";
import { IMordeDetailToggleProps } from "@app/(page)/transaction/interface";
const TxMoreDetail: React.FC<IMordeDetailToggleProps> = ({
  mordeDetailToggle,
  moreDetailToggleHandler,
  transactionItemData,
}) => {
  return (
    <>
      <div
        className={`${
          mordeDetailToggle
            ? "sm:h-[480px] md:h-[450px] lg:h-[380px]"
            : " overflow-hidden"
        } h-16 transition-all duration-500 relative `}
      >
        <TxOnMoreDetail
          mordeDetailToggle={mordeDetailToggle}
          moreDetailToggleHandler={moreDetailToggleHandler}
          transactionItemData={transactionItemData}
        />
      </div>
    </>
  );
};

export default TxMoreDetail;

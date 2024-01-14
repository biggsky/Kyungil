"use client";
import React, { useState } from "react";
import { IBlocksMoreProps } from "../../interface";
import BlockCardText from "./CardText";

const MoreInfo: React.FC<IBlocksMoreProps> = ({
  hash,
  parentHash,
  stateRoot,
  withdrawsRoot,
  nonce,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="">
      <div
        className={`relative z-0 transition-all duration-500 flex flex-col justify-between ${
          !showMore ? "h-0" : "sm:h-[450px] md:h-[230px] lg:h-[230px]"
        } overflow-hidden`}
      >
        <div
          className={`z-0 relative  box-border break-words flex flex-col ${
            showMore
              ? "h-0"
              : "mb-3 border-b border-gray h-auto sm:h-[450px] md:h-[230px] lg:h-[230px]"
          }`}
        >
          <BlockCardText type={true} title="Hash:" content={hash} />
          <BlockCardText
            type={true}
            title="Parent Hash:"
            content={parentHash}
          />
          <BlockCardText type={true} title="StateRoot:" content={stateRoot} />
          <BlockCardText
            type={true}
            title="WithdrawlsRoot: "
            content={withdrawsRoot}
          />
          <BlockCardText type={true} title="Nonce:" content={nonce} />
        </div>
      </div>
      <div className=" relative z-5 flex justify-between h-16 overflow-hidden items-center ">
        <div className="font-medium text-sm dark:text-white">More Detail:</div>
        <div
          className="text-sm text-text-mainTextColor cursor-pointer"
          onClick={toggleMoreInfo}
        >
          {showMore ? "+ Click to show more" : "- Click to show less"}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

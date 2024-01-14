import React from "react";
import { IBlocksDifficultyProps } from "../../interface";
import BlockCardText from "./CardText";
import Link from "next/link";

const DiffcultyInfo: React.FC<IBlocksDifficultyProps> = ({
  feeRecipient,
  totalDifficulty,
}) => {
  return (
    <div className="border-b border-t border-gray dark:text-white">
      <BlockCardText
        title="Fee Recipient:"
        content={
          <>
            <Link
              className="text-text-mainTextColor"
              href={`/address/${feeRecipient}`}
            >
              Fee Recipient {feeRecipient}
            </Link>
            <span> in sec</span>
          </>
        }
      />
      <BlockCardText title="Total Difficulty:" content={totalDifficulty} />
    </div>
  );
};

export default DiffcultyInfo;

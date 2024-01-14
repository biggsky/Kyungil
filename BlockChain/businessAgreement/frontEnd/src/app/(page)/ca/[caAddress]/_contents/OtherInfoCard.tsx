import React from "react";
import { ICaOtherInfoCardProps } from "../../interface";

interface TokenCardProps {
  title: string;
  decimal: string;
  createdAt: string;
}

const CaOtherInfoCard: React.FC<ICaOtherInfoCardProps> = ({
  title,
  signitureNames,
}) => {
  return (
    <div className=" flex flex-col gap-5 text-sm break-words overflow-y-scroll">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      {signitureNames.length !== 0 && signitureNames[0] !== ""
        ? signitureNames.map((el, index) => {
            return <div key={index}>{el}</div>;
          })
        : "데이터 없음"}
    </div>
  );
};

export default CaOtherInfoCard;

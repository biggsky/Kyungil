import React from "react";
import { ICaMarketCardProps } from "../../interface";

interface TokenCardProps {
  title: string;
  circulatingSupply: string;
  ownerAddress: string;
  contractAddress: string;
}

const CaMarketCard: React.FC<ICaMarketCardProps> = ({
  title,
  abiSigniture,
}) => {
  return (
    <div className=" flex flex-col gap-5 text-sm overflow-y-scroll">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      {abiSigniture.length !== 0 && abiSigniture[0] !== ""
        ? abiSigniture.map((el, index) => {
            return <div key={index}>{el}</div>;
          })
        : "데이터 없음"}
    </div>
  );
};

export default CaMarketCard;

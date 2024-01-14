import React from "react";
import { ICaDetailOverViewProps } from "../../interface";

interface TokenCardProps {
  title: string;
  name: string;
  symbol: string;
}

const CaOverviewCard: React.FC<ICaDetailOverViewProps> = ({
  title,
  caType,
}) => {
  return (
    <div className=" flex flex-col gap-5 text-sm">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>
        <div>{caType ? caType : '데이터 없음' }</div>
      </div>
    </div>
  );
};

export default CaOverviewCard;

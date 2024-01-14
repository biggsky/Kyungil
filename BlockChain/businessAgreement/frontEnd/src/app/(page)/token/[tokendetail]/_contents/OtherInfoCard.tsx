import React from "react";
import TokenCardContent from "../../_contents/CardContent";

interface TokenCardProps {
  title: string;
  decimal: string;
  createdAt: string;
}

const TokenOtherInfo: React.FC<TokenCardProps> = ({ title, createdAt, decimal }) => {
  return (
    <div className=" flex flex-col gap-5 text-sm break-words">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>DECIMAL</div>
      <div>{decimal}</div>
      <div>CTEATE DATE</div>
      <div>{createdAt}</div>
    </div>
  );
};

export default TokenOtherInfo;

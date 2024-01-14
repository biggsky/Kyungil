import React from "react";

interface TokenCardProps {
  title: string;
  name: string;
  symbol: string;
}

const TokenOverview: React.FC<TokenCardProps> = ({ title, name, symbol }) => {
  return (
    <div className=" flex flex-col gap-5 text-sm">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>
        <div>NAME</div>
        <div>{name}</div>
      </div>
      <div>
        <div>SYMBOL</div>
        <div>{symbol}</div>
      </div>
    </div>
  );
};

export default TokenOverview;

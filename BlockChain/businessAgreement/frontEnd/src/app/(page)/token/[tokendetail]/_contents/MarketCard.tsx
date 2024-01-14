import React from "react";

interface TokenCardProps {
  title: string;
  circulatingSupply: string;
  ownerAddress: string;
  contractAddress: string;
}

const TokenMarketCard: React.FC<TokenCardProps> = ({
  title,
  circulatingSupply,
  ownerAddress,
  contractAddress,
}) => {
  return (
    <div className=" flex flex-col gap-5 text-sm">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>
        <div>TOTAL SUPPLY</div>
        <div>{circulatingSupply}</div>
      </div>
      <div>
        <div>OWNER</div>
        <div>{ownerAddress}</div>
      </div>
      <div>
        <div>CA</div>
        <div>${contractAddress}</div>
      </div>
    </div>
  );
};

export default TokenMarketCard;

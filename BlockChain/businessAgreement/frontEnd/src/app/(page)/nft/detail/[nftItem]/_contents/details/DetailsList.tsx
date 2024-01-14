import React from "react";
import NftDetailsItemLink from "./DetailsItemLink";
import NftDetailsItem from "./DetailsItem";
import { INftDetailsProps } from "../../interface";


export interface INftDetailsListProps extends INftDetailsProps {
  stateProps: boolean;
}

const NftDetailsList: React.FC<INftDetailsListProps> = ({ stateProps, nftData }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        stateProps ? "max-h-[1000px]" : "max-h-0"
      } `}>
      <ul className='w-11/12 m-auto py-5'>
        <NftDetailsItemLink
          name='Owner'
          address={nftData.Owner}
        />
        <NftDetailsItemLink
          name='Contract Address'
          address={nftData.address}
        />
        <NftDetailsItemLink
          name='Creator'
          address={nftData.creatorAddress}
        />

        {/* <NftDetailsItem name='Classification' address='off-Chain (IPFS)' /> */}
        <NftDetailsItem name='Token ID' address={nftData.tokenId} />
        <NftDetailsItem name='Token Standard' address='ERC-721' />
      </ul>
    </div>
  );
};

export default NftDetailsList;

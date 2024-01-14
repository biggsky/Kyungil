import React from 'react'
import NftItemDetails from './ItemDetails'
import { INftDetailsProps } from "../../interface";

const NftDetails:React.FC<INftDetailsProps> = ({nftData}) => {
  return (
    <div className='border-gray border-[1px] rounded-xl overflow-hidden mb-[20px] bg-white dark:bg-black/90'>
      <NftItemDetails nftData={nftData} />
    </div>
  )
}

export default NftDetails
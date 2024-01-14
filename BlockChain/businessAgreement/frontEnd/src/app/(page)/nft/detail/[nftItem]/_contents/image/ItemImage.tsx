import React from "react";

interface NftItemImageProps{
  nftData : string
}

const NftItemImage:React.FC<NftItemImageProps> = ({nftData}) => {
  return (
    <div className='border-gray border-[1px] rounded-xl w-full flex my-[20px] bg-white dark:bg-black/90'>
      <img
        className='w-11/12 h-5/6 rounded-xl m-auto my-[50px]'
        src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/radiator-springs-martin-arriola.jpg'
        alt=''
      />
    </div>
  );
};

export default NftItemImage;

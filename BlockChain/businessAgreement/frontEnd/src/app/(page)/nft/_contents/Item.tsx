import React, { useEffect } from "react";
import { INFTItem } from "../interface";
import Link from "next/link";
import Image from "next/image";

const CollectionItem: React.FC<INFTItem> = ({
  createdAt,
  creatorAddress,
  description,
  id,
  imgUrl,
  name,
  owner,
  tokenId,
}) => {
  return (
    <ul className='flex w-[2000px] h-16 border-b border-gray text-sm px-4 dark:text-white '>
      <li className='flex justify-center items-center   w-[50px]'>{id}</li>
      <li className='flex justify-center items-center   w-[50px]'>
        {/* <Image width={25} height={25} src={imgUrl} alt="nft이미지" /> */}
        <img
          className='w-25 h-25 mr-3'
          src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/radiator-springs-martin-arriola.jpg'
          alt=''
        />
      </li>
      {/* 바로 밑에 li 태그 세로로 중앙 정렬 */}
      <Link
        className='h-16  w-[300px] '
        style={{
          lineHeight: "4rem",
        }}
        href={`/nft/detail/${id}`}>
        <li className='truncate'>{name}</li>
      </Link>

      <li className='flex justify-center items-center   w-[200px]'>
        {" "}
        <span className=' border-2 border-gray p-1 rounded-lg text-xs'>
          ERC-721
        </span>
      </li>
      <li className='flex justify-center items-center    w-[150px]'>
        {" "}
        {tokenId}
      </li>
      <li className='flex justify-center items-center     w-[400px]'>
        {" "}
        {owner}
      </li>
      <li className='flex justify-center items-center    w-[400px]'>
        {" "}
        {creatorAddress}
      </li>
      <li className='flex justify-center items-center    w-[400px]'>
        <span className='truncate'>{description}</span>
      </li>
      <li className='flex justify-center items-center    w-[100px]'>
        {" "}
        {createdAt}
      </li>
    </ul>
  );
};

export default CollectionItem;

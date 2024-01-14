import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { INftDetailsProps } from "../../interface";
import { faCircle } from "@fortawesome/free-regular-svg-icons";


const NftItemTitle:React.FC<INftDetailsProps> = ({nftData}) => {
  return (
    <>
      <div className='w-full my-[20px] dark:text-white'>
        <h1 className="text-[17px] font-bold">{nftData.name}</h1>
        <p className="text-text-mainTextColor">
          <FontAwesomeIcon icon={faCircle} />
          <span className="ml-2">{nftData.description}</span>
        </p>
      </div>
    </>
  );
};

export default NftItemTitle;

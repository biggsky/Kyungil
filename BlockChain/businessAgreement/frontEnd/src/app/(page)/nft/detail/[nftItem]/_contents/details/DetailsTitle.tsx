import React, {useState} from "react";
import { INftDetailsTitleProps } from "../../interface";
import { faChevronUp, faChevronDown, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NftDetailsTitle:React.FC<INftDetailsTitleProps> = ({stateProps, stateSetProps}) => {
  const titleClick = () => {
    stateSetProps(!stateProps);
  }
  return (
    <h2
      onClick={titleClick}
      className='border-gray border-b-[1px] h-[50px] leading-[50px] px-5 font-bold flex justify-between dark:text-white'>
      <span><FontAwesomeIcon icon={faList} /> Details</span>
      <span className=''>{stateProps ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
    </h2>
  );
};

export default NftDetailsTitle;

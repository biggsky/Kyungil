import React from "react";
import Link from "next/link";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INftPageTxnListProps } from "../../interface";
import WordBallon from "@app/_components/wordBallon";
import Image from "next/image";
import Arrow from "public/arrow.png";

const NftPageTxnList: React.FC<INftPageTxnListProps> = ({
  pageTxList,
  toggleHandler,
}) => {
  const truncate = (hash: string) => {
    if(hash==""){
      return;
    }
    return hash.substring(0, 19) + "...";
  };
  const truncate2 = (hash: string) => {
    if(hash==""){
      return;
    }
    return hash.substring(0, 8) + "..." + hash.slice(-8);
  };
  const additionalClick = (index: number) => {
    console.log(index);
  };
  const minWidth = (value: number) => {
    return `min-w-[${value}px]`;
  };
  return (
    <>
      {pageTxList.map((item, index) => (
        <tr key={index} className='border-gray border-b-[1px] text-sm '>
          {item.hash == "" ? 
          <>
            <td className={`${minWidth(60)} h-[50px]`}></td>
            <td className={`${minWidth(220)}`}></td>
            <td className={`${minWidth(180)}`}></td>
            <td className={`${minWidth(100)}`}></td>
            <td className={`${minWidth(220)}`}></td>
            <td className={`${minWidth(50)}`}></td>
            <td className={`${minWidth(220)}`}></td>
          </>
          :
          <>
            <td>
              <div className={`${minWidth(60)} h-[50px] flex justify-center`}>
                <button onClick={() => additionalClick(index)}>
                  <FontAwesomeIcon
                    className='border-gray rounded-lg p-[10px] border-[1px] cursor-pointer dark:text-white'
                    icon={faEye}
                    onClick={toggleHandler}
                  />
                </button>
                {/* <div className={`ml-[50px] w-[100px] h-[50px] bg-yellow absolute ${test[index] ? "block" : "hidden"}`}></div> */}
              </div>
            </td>
            <td>
              <div className={`${minWidth(220)}`}>
                <Link className='text-text-mainTextColor' href={"./1"}>
                  {truncate(item.hash)}
                </Link>
              </div>
            </td>
            <td>
              <div className={`${minWidth(180)} dark:text-white`}>{item.Timestamp}</div>
            </td>
            <td>
              <div className={`${minWidth(100)} dark:text-white`}>
                {item.Method}
              </div>
            </td>
            {/* <td>
              <div className={`${minWidth(180)}`}>{item.price}</div>
            </td> */}
            <td>
              <div className={`${minWidth(220)} mr-[10px] `}>
                <Link className='text-text-mainTextColor mr-[10px]' href={"./1"}>
                  {truncate2(item.from)}
                </Link>
                <WordBallon copyValue={item.from} />
              </div>
            </td>
            <td>
              <div className={`${minWidth(50)} mr-[10px]`}>
                <Image alt='' width={20} src={Arrow} />
              </div>
            </td>
            <td>
              <div className={`${minWidth(220)}`}>
                <Link className='text-text-mainTextColor mr-[10px]' href={"./1"}>
                  {truncate2(item.to)}
                </Link>
                <WordBallon copyValue={item.to} />
              </div>
            </td>
          </>
          }
        </tr>
      ))}
    </>
  );
};

export default NftPageTxnList;

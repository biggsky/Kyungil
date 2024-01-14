import React, { useState } from "react";
import { faCheck, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

interface IBallonWord {
  copyValue: string;
}

const WordBallon: React.FC<IBallonWord> = ({ copyValue }) => {
  const [copyIcon, setCopyIcon] = useState(false);
  const [iconHover, setIconHover] = useState(false);

  const AddressClick = (value: string) => {
    setCopyIcon(true);
    setTimeout(() => {
      setCopyIcon(false);
    }, 1000);
    navigator.clipboard
      .writeText(value)
      .then(() => {
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const hoverOn = () =>{
    setIconHover(true);
  }
  const hoverOff = () =>{
    setIconHover(false);
  }

  return (
    <>
      <span className='group relative leading-none'>
        <button onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          onClick={() => AddressClick(copyValue)}>
          {copyIcon ? (
            <FontAwesomeIcon className="text-stone-400 hover:text-blue-500" icon={faCheck} />
          ) : (
            <FontAwesomeIcon className="text-stone-400 hover:text-blue-500" icon={faCopy} />
          )}
        </button>

        {/* 호버 */}
        {iconHover ? 

        // 호버됐을때
        <>
          <div className={`absolute bg-[#15293F] text-white p-2 whitespace-nowrap rounded-lg text-[10px] bottom-[30px]  ${
            iconHover ? "opacity-100" : "opacity-0"
          } ${
            copyIcon ? 'left-[-20px]' : "left-[-35px]"
          }
          `}>
            {copyIcon ? "Copied!" : "Copy Address"}
            
          </div>
          <div className={`absolute h-[10px] bottom-[20px] border-t-[#15293F] border-t-[5px] border-x-transparent border-x-[5px] left-[3px] duration-500 ${
            iconHover ? "opacity-100" : "opacity-0"
          }
        `}>
          </div>
        </>
        
        : "" }
        
      </span>
    </>
  );
};

export default WordBallon;

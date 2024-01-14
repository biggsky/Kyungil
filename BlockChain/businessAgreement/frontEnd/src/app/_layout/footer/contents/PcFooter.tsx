import React from "react";
import Image from "next/image";
import Logo from "public/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const PcFooter = () => {
  const topMove = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-[1400px] m-auto h-80  p-8 md:border-t border-gray  ">
        <div className="h-20 flex justify-end border-2  border-b-gray border-x-white border-t-white dark:border-b-white dark:border-x-black/90 dark:border-t-black/90">
          <button onClick={topMove} className="w-12 h-12 cursor-pointer hover:bg-[#E3F4F4] transition-all duration-500 rounded-lg">
            <FontAwesomeIcon className="text-[30px] text-[#C4DFDF]"  icon={faCircleChevronUp} />
          </button>
        </div>
        <div className="w-full h-1/3 flex  items-center">
          <Image src={Logo} alt="바운스코드 이미지" width={50} />
          <div className="text-lg ml-10 font-bold dark:text-white">
            Bounce Explorer EtherScan
          </div>
        </div>
        <div className="h-20">
          <ul className="ml-2 h-full text-xs flex flex-col justify-center dark:text-white">
            <li>EtherScan @2023 (private network)</li>
            <li> Terms of Service Network Status</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PcFooter;

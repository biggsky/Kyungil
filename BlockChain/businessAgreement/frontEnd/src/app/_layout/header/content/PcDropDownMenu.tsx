import Image from "next/image";
import React, { useState } from "react";
import { IDropDownMenuData, IPcDropMenu } from "../interface";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
const PcDropDownMenu: React.FC<IPcDropMenu> = ({
  label,
  dropDownMenuArr,
  openMenuName,
  openMenuNameHandler,
}) => {
  const dropArray =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAHlBMVEX///8AAABhYWFZWVleXl5bW1uZmZlWVlZSUlKHh4c7NRlEAAACq0lEQVR4nO3Za47jIBBFYc/E6XTvf8MjVEITx3kYTFGPPt8KfMUh/MiyAAAAAAAAAAAAAAAAAAAAAAAAYOPr9jez29eyfP/J7Luc4mr9FYpWCTXvxLXexYv1lyi5/P+5uVp/i4rr/S9qxlDXZSPfKV6XB9nu4uVxYLZQ1/3AXBOfDswU6pNEc018OTBLqC8SFRkejd0zkS3UN4nmOMUPJxj/Lr69gxlC/Zho9IkHB8YN9VCikSc2DIwZ6uFEo05sHBgv1KZERayn/8BDvxcp1OZEo51i1wkWUe5ixx2sYoTamWiciacGRgj1RKIxJp4e6D3Uk4kKz49G9zOx5TfUAYkKr6c46AQLn3dxyB2sPIY6LFGvEwcP9Bfq0EQ9TlQY6CvU4Yl6m6g00E+oKokKH0//wId+z0OoaokK+1AVE/UxUX2gdajKidpPnDLQMtQJidpOnDbQKtRJiQqLp1/1od+bH+rERMXsU5x8gsXcuzj1DlYzQ52e6OyJRgPnhWqS6MyJhgPnhGqWqNB/NAyeiS3tUE0TFbqnaH6CheZdNL6DlV6oDhIVWhPdDNQK1Umi4qYw8GY9amt8qI4SFaMnuhs4+i66uoPVyKffxUO/Ny5Uh4mKUafo9ASLMXfR5R2sRoTqNlFxfqLzgedDdZ2oODcxwMBzobpPVPQ/Go6fia3eUEMkKvpOMcwJFj13McgdrNpDDZSoaJ0YbmBrqMESFS0TQw5sCTVgouLooxHqmdg6FmrQRMWRUwx8gsXnuxj2DlafQg2dqHg/McHA9/9pOPtvotfruxj+DlavQk2RqHg+MdHA56GmSVTsn/7gD/3eY6ipEhXX3CdY3N/FZHewWjMnKtbsA2uoSRMVl+wDS6iJExU/1h8AAAAAAAAAAAAAAAAAAAAAAADw2/0D1Ro1Y8h9PUkAAAAASUVORK5CYII=";

  return (
    <>
      <li className="cursor-pointer flex flex-col justify-start items-start relative ">
        <div
          className="flex justify-center items-center md:mr-[10px]"
          onClick={() => {
            openMenuNameHandler(label);
          }}
        >
          <span className="md:text-sm"> {label} </span>
          <FontAwesomeIcon
            width={10}
            height={10}
            icon={faCaretUp}
            className={`ml-3 dark:text-white ${
              openMenuName === label || "scale-y-[-1]"
            }`}
          />
        </div>
        {openMenuName === label && (
          <div className={`w-full relative animate-slide-up-fade-in `}>
            <ul className="bg-white shadow-md rounded-b-lg border-2 border-white border-t-green-600/30 w-52 absolute h-auto top-0 p-3 dark:bg-black md:text-sm">
              {dropDownMenuArr.map((ele: IDropDownMenuData, index: number) => {
                return (
                  <li key={index} className=" hover:bg-black/10 cursor-pointer rounded p-1 mt-2 dark:hover:bg-gray/30">
                    <Link href={`/${ele.href}`}>{ele.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default PcDropDownMenu;

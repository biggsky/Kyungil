"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IMobileDropMenuProps, IopenToggle, IsubMenu } from "../interface";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const MobileDropDownMenu: React.FC<IMobileDropMenuProps> = ({
  isMenuOpen,
  router,
}) => {
  // 서브 메뉴를 열기위한 토글
  const [subMenuOpenName, setSubMenuOpenName] = useState<string>("");

  const dropArray =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAHlBMVEX///8AAABhYWFZWVleXl5bW1uZmZlWVlZSUlKHh4c7NRlEAAACq0lEQVR4nO3Za47jIBBFYc/E6XTvf8MjVEITx3kYTFGPPt8KfMUh/MiyAAAAAAAAAAAAAAAAAAAAAAAAYOPr9jez29eyfP/J7Luc4mr9FYpWCTXvxLXexYv1lyi5/P+5uVp/i4rr/S9qxlDXZSPfKV6XB9nu4uVxYLZQ1/3AXBOfDswU6pNEc018OTBLqC8SFRkejd0zkS3UN4nmOMUPJxj/Lr69gxlC/Zho9IkHB8YN9VCikSc2DIwZ6uFEo05sHBgv1KZERayn/8BDvxcp1OZEo51i1wkWUe5ixx2sYoTamWiciacGRgj1RKIxJp4e6D3Uk4kKz49G9zOx5TfUAYkKr6c46AQLn3dxyB2sPIY6LFGvEwcP9Bfq0EQ9TlQY6CvU4Yl6m6g00E+oKokKH0//wId+z0OoaokK+1AVE/UxUX2gdajKidpPnDLQMtQJidpOnDbQKtRJiQqLp1/1od+bH+rERMXsU5x8gsXcuzj1DlYzQ52e6OyJRgPnhWqS6MyJhgPnhGqWqNB/NAyeiS3tUE0TFbqnaH6CheZdNL6DlV6oDhIVWhPdDNQK1Umi4qYw8GY9amt8qI4SFaMnuhs4+i66uoPVyKffxUO/Ny5Uh4mKUafo9ASLMXfR5R2sRoTqNlFxfqLzgedDdZ2oODcxwMBzobpPVPQ/Go6fia3eUEMkKvpOMcwJFj13McgdrNpDDZSoaJ0YbmBrqMESFS0TQw5sCTVgouLooxHqmdg6FmrQRMWRUwx8gsXnuxj2DlafQg2dqHg/McHA9/9pOPtvotfruxj+DlavQk2RqHg+MdHA56GmSVTsn/7gD/3eY6ipEhXX3CdY3N/FZHewWjMnKtbsA2uoSRMVl+wDS6iJExU/1h8AAAAAAAAAAAAAAAAAAAAAAADw2/0D1Ro1Y8h9PUkAAAAASUVORK5CYII=";
  //  서브 메뉴 토글 handler
  const subMenuHandler = (key: string) => {
    if (subMenuOpenName === key) {
      setSubMenuOpenName("");
    } else {
      setSubMenuOpenName(key);
    }
  };
  const menuCloseCSS = "h-0 overflow-hidden  relative transition-all    z-00 ";
  const menuOpenCSS = "p-4 h-fit relative transition-all   z-00 dark:bg-black";
  const menuArr: Array<string> = ["Blockchain", "Tokens", "NFTs"];
  const subMenuArr: IsubMenu = {
    0: [
      { name: "Transactions", href: "transaction" },
      { name: "Pending Transactions", href: "pendingTransaction" },
      { name: "View Blocks", href: "blocks" },
    ],
    1: [
      { name: "Top Tokens", href: "token" },
      { name: "Token Transfers", href: "token/transfer" },
    ],
    2: [
      { name: "Latest Transfer", href: "nft" },
      { name: "Latest Mints", href: "nftTrans" },
    ],
  };
  useEffect(() => {
    setSubMenuOpenName("");
  }, [isMenuOpen]);
  return (
    <div className={isMenuOpen ? menuOpenCSS : menuCloseCSS}>
      <ul className="w-full ">
        <li
          className="text-text-mainTextColor mt-2 cursor-pointer "
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </li>
        {menuArr.map((el, index) => {
          return (
            <li
              className="w-full mt-2 dark:text-white "
              onClick={() => {
                subMenuHandler(index.toString());
              }}
              key={index}
            >
              <div className="flex justify-between items-center">
                {el}
                <FontAwesomeIcon
                  className={
                    subMenuOpenName === index.toString() ? "" : "scale-y-[-1]"
                  }
                  width={10}
                  height={10}
                  icon={faCaretUp}
                />
              </div>
              {subMenuOpenName === index.toString() && (
                <div className=" h-fit">
                  <div className="w-full border-2 rounded-xl border-gray h-fit m-auto p-5 dark:bg-black">
                    <ul>
                      {subMenuArr[`${index}`].map((el, index) => {
                        return (
                          <li
                            key={index}
                            className=" hover:bg-black/10 cursor-pointer rounded p-1 dark:hover:bg-gray/30"
                          >
                            {" "}
                            <Link href={`/${el.href}`}> {el.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileDropDownMenu;

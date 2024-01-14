"use client";
import Image from "next/image";
import React, { useState } from "react";
import ham from "public/burger.png";
import MobileDropDownMenu from "./MobileDropDownMenu";
import { IDropMenuProps } from "../interface";
import Link from "next/link";
import DarkModeToggle from "@app/_components/darkToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "public/Logo.png";
const MobileHeader: React.FC<IDropMenuProps> = ({ router }) => {
  const [isMenuOpen, setIsMeuOpen] = useState<boolean>(false);
  return (
    <div className="  min-h-[60px]  h-fit relative">
      <div className=" p-4 min-h-[60px] h-full flex justify-between items-center relative z-10 bg-white  dark:bg-black">
        <Link href={"/"}>
          <div className="w-40 h-10 flex justify-between items-center">
            <Image src={Logo} alt="바운스코드 이미지" width={50} />
            <div className="whitespace-nowrap dark:text-white">Bounce Explorer</div>
          </div>
        </Link>
        <div className="flex">
          <div className=" top-16 w-14 h-full text-right ">
            <FontAwesomeIcon
              className="w-6 mr-4 dark:text-white"
              icon={faBars}
              onClick={() => {
                setIsMeuOpen((prev) => {
                  return !prev;
                });
              }}
              size="xl"
            />
          </div>
          <DarkModeToggle />
        </div>
      </div>
      <MobileDropDownMenu router={router} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default MobileHeader;

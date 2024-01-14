"use client";
import React, { useEffect, useState } from "react";
import PcDropDownMenu from "./PcDropDownMenu";
import {
  IDropDownMenuData,
  IDropDownMenuDataObj,
  IDropMenuProps,
  IPcDropMenu,
} from "../interface";
import Link from "next/link";
import DarkModeToggle from "@app/_components/darkToggle";
import Image from "next/image";
import Logo from "../../../../../public/Logo.png";

const PcHeader: React.FC<IDropMenuProps> = ({ router }) => {
  const [openMenuName, setOpenMenuName] = useState<string>("");
  const dropDownMenu: IDropDownMenuDataObj = {
    blockchain: [
      { name: "Transactions", href: "transaction" },
      { name: "Pending Transactions", href: "pendingTransaction" },
      { name: "View Blocks", href: "blocks" },
    ],
    token: [
      { name: "Top Tokens", href: "token" },
      { name: "Token Transfers", href: "token/transfer" },
    ],
    NFT: [
      { name: "Top NFTs", href: "nft" },
      { name: "NFT Transfers", href: "nftTrans" },
    ],
  };

  const openMenuNameHandler = (name: string) => {
    if (openMenuName === name) {
      setOpenMenuName("");
    } else {
      setOpenMenuName(name);
    }
  };

  return (
    <>
    <div className="bg-white dark:bg-black border-b-gray">
      <div className="max-w-[1400px] m-auto min-h-[60px] px-8 py-2 h-fit relative">
        <div className="min-h-[60px] h-full flex justify-between items-center relative z-10  m-auto  ">
          <Link href={"/"}>
            <div className="w-52 h-10 flex justify-around items-center">
              <Image src={Logo} alt="바운스코드 이미지" width={50} />
              <div className="font-titleFont  text-xl whitespace-nowrap dark:text-white">
                Bounce Explorer
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-end w-2/3 ">
            <div className="w-2/3 h-full dark:text-white flex justify-between">
              <ul className="w-full flex  justify-evenly items-center font-headerFont">
                <li
                  className="cursor-pointer  flex flex-col justify-start items-start  text-text-mainTextColor md:text-sm md:mr-[10px]"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Home{" "}
                </li>
                <PcDropDownMenu
                  label="Blockchain"
                  dropDownMenuArr={dropDownMenu["blockchain"]}
                  openMenuName={openMenuName}
                  openMenuNameHandler={openMenuNameHandler}
                />
                <PcDropDownMenu
                  label="Tokens"
                  dropDownMenuArr={dropDownMenu["token"]}
                  openMenuName={openMenuName}
                  openMenuNameHandler={openMenuNameHandler}
                />
                <PcDropDownMenu
                  label="NFTs"
                  dropDownMenuArr={dropDownMenu["NFT"]}
                  openMenuName={openMenuName}
                  openMenuNameHandler={openMenuNameHandler}
                />
              </ul>
            </div>
          </div>
              <DarkModeToggle />
        </div>
      </div>
    </div>
    </>
  );
};

export default PcHeader;

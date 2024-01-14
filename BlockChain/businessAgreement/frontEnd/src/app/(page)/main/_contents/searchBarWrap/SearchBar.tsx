"use client";
import React, { useState, KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import useSearch from "@app/_hooks/useSearch";
import searchIcon from "../../../../../../public/search05.png";
import searchIcon2 from "../../../../../../public/search06.png";

const MainSearchBar = () => {
  const { value, setValue, handleSearch } = useSearch();

  const handleKeyPress = (e : KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-white flex h-[58px] leading-[58px] rounded-lg whitespace-nowrap m-auto sm:w-11/12 md:w-[500px] lg:w-[500px] dark:bg-black dark:border-gray">
      <input
        className="h-[34px] m-auto rounded-lg text-sm ml-[10px] w-11/12  dark:bg-black dark:text-white"
        placeholder="Search by Address / Txn Hash / Block "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress} // Listen for key press events
      />
      <span className="p-2 flex cursor-pointer" onClick={handleSearch}>
        <Image src={searchIcon} alt="Search Icon" width={40} height={40} />
      </span>
    </div>
  );
};

export default MainSearchBar;

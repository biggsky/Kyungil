"use client";
import React, { useEffect } from "react";

interface TabButtonProps {
  toggleLabelNum: string | null;
  toggleHandler: (label: string) => void;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  toggleLabelNum,
  toggleHandler,
  label,
}) => {
  const isActiveCSS =
    "bg-[#A3CCA3]  text-xs text-081D35 py-2 px-5  w-auto max-h-[32px] rounded m-1 flex justify-center items-center";
  const isNotActiveCSS =
    "bg-gray text-081D35 text-xs  w-auto max-h-[32px] py-2 px-5  rounded m-1 flex justify-center items-center";
  return (
    <button
      className={toggleLabelNum === label ? isActiveCSS : isNotActiveCSS}
      onClick={() => {
        toggleHandler(label);
      }}
    >
      {label}
    </button>
  );
};

export default TabButton;

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ILatestTransactionsButtonProps } from "../../interface";

const MainLatestTransactionsButton: React.FC<
  ILatestTransactionsButtonProps
> = ({ buttonName }) => {
  const router = useRouter();
  const routeHandler = () => {
    router.push(`/transaction`);
  };
  return (
    <button
      className="bg-[#eef3f2] text-stone-500 w-full h-[50px] font-bold text-xs  dark:bg-black dark:text-stone-300 dark:border-t border-gray"
      onClick={routeHandler}
    >
      VIEW ALL {buttonName} →
    </button>
  );
};

export default MainLatestTransactionsButton;

import React from "react";
import { IPageNationProps } from "../transactionTable/interface";

const Pagination: React.FC<IPageNationProps> = ({
  page,
  pageHandler,
  maxPage,
}) => {
  return (
    <div className="w-full h-20  flex justify-center items-center text-sm min-w-[280px] ">
      <div
        className={`cursor-pointer m-2 border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg dark:bg-gray/60
        ${page === 1 && "text-gray"}`}
        onClick={() => {
          if (page !== 1) {
            pageHandler(1);
          }
        }}
      >
        First
      </div>
      <div
        className={`cursor-pointer m-2 border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg dark:bg-gray/60 ${
          page === 1 && "text-gray"
        } `}
        onClick={() => {
          if (page !== 1) {
            pageHandler(page - 1);
          }
        }}
      >
        {"<"}
      </div>
      <div className="m-2 flex justify-center items-center border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg dark:bg-gray/60">
        Page {page} of {maxPage}
      </div>
      <div
        className={`cursor-pointer m-2 border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg dark:bg-gray/60 ${
          page === maxPage && "text-gray"
        } `}
        onClick={() => {
          if (page !== maxPage) {
            pageHandler(page + 1);
          }
        }}
      >
        {">"}
      </div>
      <div
        className={`cursor-pointer m-2 border-gray border-2 py-1 px-2 bg-searchBarBackGroundColor rounded-lg dark:bg-gray/60 ${
          page === maxPage && "text-gray"
        }`}
        onClick={() => {
          if (page !== maxPage) {
            pageHandler(maxPage);
          }
        }}
      >
        Last
      </div>
    </div>
  );
};

export default Pagination;

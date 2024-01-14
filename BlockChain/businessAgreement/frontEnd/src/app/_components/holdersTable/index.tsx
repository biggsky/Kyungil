import React from "react";
import { HoldersListProps } from "./interface";
import HoldersList from "./HoldersContainer";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../pagination";

const HolderListWrap: React.FC<HoldersListProps> = ({ holdersList }) => {
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<string>(holdersList);

  return (
    <div className="mt-5 w-11/12 m-auto rounded-lg shadow-md  h-auto bg-white  max-h-[600px] max-w-[1250px]">
      <div className="overflow-x-auto h-auto ">
        <table className="w-full">
          <thead>
            <tr className="h-[50px] border-b border-gray flex text-sm">
              <th className="flex w-[100px] items-center  pl-[20px]">id</th>
              <th className="flex min-w-[350px] items-center">Address</th>
            </tr>
          </thead>
          <tbody className="align-middle whitespace-no-wrap">
            <HoldersList holdersList={pageTxList} />
          </tbody>
        </table>
      </div>
      <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
    </div>
  );
};

export default HolderListWrap;

import React from "react";

const CollectionTableTitle = () => {
  return (
    <ul className="flex h-20 w-[2000px]  border-b border-gray font-bold text-sm px-4 dark:text-white">
      <li className=" flex justify-center items-center   w-[50px]">#</li>
      <li className=" flex justify-center items-center   w-[350px]">
        NFTItem
      </li>
      <li className=" flex justify-center items-center   w-[200px]">Type</li>
      <li className=" flex justify-center items-center   w-[150px]">
        Token ID
      </li>
      <li className=" flex justify-center items-center   w-[400px]">Owner</li>
      <li className=" flex justify-center items-center   w-[400px]">Creator</li>
      <li className=" flex justify-center items-center   w-[400px]">
        Description
      </li>
      <li className=" flex justify-center items-center   w-[100px]">
        Created Date
      </li>
    </ul>
  );
};

export default CollectionTableTitle;

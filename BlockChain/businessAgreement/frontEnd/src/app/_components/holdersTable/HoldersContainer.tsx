"use client";

import React, { useEffect, useState } from "react";
import { HoldersListProps } from "./interface";
import HoldersItem from "./HoldersItem";
import Pagination from "@app/_components/pagination";
import usePagiNation from "@app/_hooks/usePagination";

const HoldersContainer: React.FC<HoldersListProps> = ({ holdersList }) => {
  return (
    <>
      {holdersList &&
        holdersList.map((ele, index) => (
          <HoldersItem HoldersItem={ele} index={index} key={index} />
        ))}
    </>
  );
};

export default HoldersContainer;

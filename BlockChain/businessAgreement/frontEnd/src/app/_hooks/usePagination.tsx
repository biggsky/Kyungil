"use client"

import React, { useEffect, useState } from "react";
const usePagination = <T,>(txList: T[], pageStack = 25) => {
  const [page, setPage] = useState<number>(1);
  const [pageTxList, setPageTxList] = useState<T[]>([]);
  const [maxPage, setMaxPage] = useState<number>(0);

  const pageHandler = (selectedPage: number) => {
    if (selectedPage > 0 && selectedPage < maxPage + 1) {
      setPage(selectedPage);
    }
  };
  useEffect(() => {
    setMaxPage(Math.ceil((txList?.length as number) / pageStack));
    if (page === maxPage) {
      setPageTxList(txList?.slice((page - 1) * pageStack));
    } else {
      setPageTxList(txList?.slice((page - 1) * pageStack, page * pageStack));
    }
  }, [page, maxPage]);
  return {
    page,
    pageHandler,
    maxPage,
    pageTxList,
  };
};

export default usePagination;

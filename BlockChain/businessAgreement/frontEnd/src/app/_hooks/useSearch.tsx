"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const useSearch = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const search = (searchValue: string): string | null => {
    if (searchValue.startsWith("0x") && searchValue.length === 42) {
      return `/address/${searchValue}`;
    } else if (searchValue.startsWith("0x") && searchValue.length === 66) {
      return `/transaction/${searchValue}`;
    } else if (!isNaN(Number(searchValue)) && Number(searchValue) > 0) {
      return `/blocks/${searchValue}`;
    } else {
      return null;
    }
  };

  const handleInvalidInput = () => {
    router.push('/error')
  };

  const handleSearch = () => {
    const searchType = search(value);
    if (searchType) {
      router.push(searchType);
    } else {
      handleInvalidInput();
    }
  };

  return {
    value,
    setValue,
    handleSearch,
  };
};

export default useSearch;
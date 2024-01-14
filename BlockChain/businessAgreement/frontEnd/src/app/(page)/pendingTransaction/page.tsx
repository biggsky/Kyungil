import React from "react";
import PendingTxListWrap from "./_contents";
import useHydration from "@app/_hooks/useHydration";

const Page = async () => {
  return (
    <div>
      <PendingTxListWrap />
    </div>
  );
};

export default Page;

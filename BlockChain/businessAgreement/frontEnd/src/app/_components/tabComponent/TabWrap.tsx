"use client";
import React, { useState } from "react";
import TabButton from "./Tab";

const TabWrap = () => {
  const [toggleLabelNum, setToggleLabelNum] = useState<string | null>(null);

  const toggleHandler = (label: string) => {
    setToggleLabelNum(label);
  };
  return (
    <div>
      {/* <TabButton
        label="1"
        toggleLabelNum={toggleLabelNum}
        toggleHandler={toggleHandler}
      />
      <TabButton
        label="2"
        toggleLabelNum={toggleLabelNum}
        toggleHandler={toggleHandler}
      />
      <TabButton
        label="3"
        toggleLabelNum={toggleLabelNum}
        toggleHandler={toggleHandler}
      />
      <TabButton
        label="4"
        toggleLabelNum={toggleLabelNum}
        toggleHandler={toggleHandler}
      /> */}
    </div>
  );
};

export default TabWrap;

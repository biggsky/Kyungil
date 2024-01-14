import React from "react";
import AbiWrap from "./_content/AbiWrap";
import Title from "./_content/Title";


const page = () => {
  return (
    <div className="box-border flex flex-col p-3 bg-mainBackGroundColor items-center">
      <div className="w-full">
        <Title title="ABI Edit Page"/>
        <AbiWrap />
      </div>
    </div>
  );
};

export default page;

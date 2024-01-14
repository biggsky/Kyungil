import React from "react";

const TxOffMoreDetail = () => {
  return (
    <div className="w-full h-16 flex sm:justify-between ">
      <div className="font-medium lg:text-itemDetail-textLabelColor lg:w-[250px] ">
        More Detail
      </div>
      <div className=" text-blue-500 cursor-pointer lg:ml-8 ">+ Click To Show More</div>
    </div>
  );
};

export default TxOffMoreDetail;

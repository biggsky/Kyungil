import React from "react";
import MainLatestWrapTitle from "../mainLatestWrapTitle";
import { ILatestWrapProps } from "./interface";

const MainLatestWrap: React.FC<ILatestWrapProps> = ({
  title,
  children,
}) => {
  return (
    <div className='border-stone-300 border-[1px] rounded-xl overflow-hidden sm:mt-[30px] sm:mb-[30px] sm:w-full sm:m-auto md:m-auto md:mb-[30px] md:w-11/12 lg:w-[49%]'>
      <MainLatestWrapTitle title={title} />
      {children}
    </div>
  );
};

export default MainLatestWrap;

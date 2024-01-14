import React from "react";

const LogInputData = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" overflow-scroll p-2  m-auto rounded-md  border-2 border-gray bg-txDetail-inputData sm:w-full sm:h-40 md:h-52 lg:w-11/12 lg:h-52">
      {children}
    </div>
  );
};

export default LogInputData;

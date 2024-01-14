import React, { ReactNode } from "react";

interface TitleProps {
  title: string;
  children?: ReactNode;
}

const Title: React.FC<TitleProps> = ({ title,children }) => {
  return (
    <div className="flex w-11/12 m-auto flex-col  border-b border-gray gap-3 py-5">
      <h1 className="font-semibold text-tablePage-textColor">{title}</h1>
      {children}
    </div>
  );
};

export default Title;

import React from "react";
import Header from "./header";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="static overflow-scroll">
      <div
        className="relative min-h-screen flex flex-col justify-between items-center w-full h-full m-0 py-0 px-5 box-border 
        min-w-[375px] bg-[url(../public/step-1@3x.png)] bg-cover bg-no-repeat bg-[top] 
        text-center text-base text-white font-body-date1"
      >
        <div className="flex-[1] flex flex-col justify-center">
          <Header />
        </div>
        <div className="flex-[3] flex flex-col">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;

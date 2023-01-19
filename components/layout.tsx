import React from "react";
import Header from "./header";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-between w-[100vw] h-[100vh] min-w-[375px] min-h-[667px] overflow-hidden mx bg-[url(../public/step-1@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-base text-white font-body-date1">
      <div className="relative w-full h-full flex  flex-col py-0 px-5 box-border items-center justify-between text-center text-base text-light-grey-8001 font-body-date1">
        <Header></Header>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;

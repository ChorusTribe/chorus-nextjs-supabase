import React from "react";
import HeaderLogo from "./header-logo";

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-center flex-1">
      <HeaderLogo />
    </div>
  );
};

export default Header;

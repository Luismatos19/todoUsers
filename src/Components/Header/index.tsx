import React from "react";
import { HeaderStyle } from "./style";

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <p>ToDo UsErS</p>
      <div className="icon"></div>
    </HeaderStyle>
  );
};

export default Header;

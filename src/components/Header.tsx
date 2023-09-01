import React from "react";
import { heading } from "../config/api";

function Header() {
  return (
    <div className="header">
      <span>{heading}</span>
    </div>
  );
}

export default Header;

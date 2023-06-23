import React from "react";
import logo from "../img/logo.png";

import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
    </header>
  );
}

export default Header;
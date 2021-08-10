import React from "react";
import logo from "../images/logo-prueba.png";

function Header() {
  return (
    <div className="header">
      <div className="header__menu">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <div className="header__nav">
          <a href="">Portfolio</a>
          <a href="">Contacto</a>
          <a href="">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
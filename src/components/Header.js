import React from "react";
import logo from "../images/logo-prueba.png";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__menu">
        <a href="">
          <img
            className="header__menu-logo"
            src={logo}
            alt="logo Lorena Perez Martinez"
          />
        </a>
        <div className="header__nav">
          <a href="">Sobre mi </a>
          <a href="">Proyectos</a>
          <a href="">Contacto</a>
        </div>
      </div>
    </div>
  );
}

export default Header;

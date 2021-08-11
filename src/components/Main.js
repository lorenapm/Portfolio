import React from "react";
import "../styles/main.css";
import Projects from "./Projects";

function Main() {
  return (
    <div className="main">
      <div className="main__banner">
        <h1>Lorena Pérez Martínez</h1>
      </div>
      <div className="main__subBanner">Front End | Team player | Resilient</div>
      <div className="main__content" id="proyectos">
        <div className="main__content-title">
          <h2>Proyectos</h2>
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default Main;

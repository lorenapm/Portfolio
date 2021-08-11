import React from "react";
import "../styles/about.css";
import image from "../images/LorenaPM.jpeg";

function About() {
  return (
    <div className="about">
      <h2 className="about__title">Sobre mi...</h2>
      <img
        className="about__image"
        src={image}
        alt="imagen Lorena Pérez Martínez"
      />
    </div>
  );
}

export default About;

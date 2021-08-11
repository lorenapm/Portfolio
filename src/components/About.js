import React from "react";
import "../styles/about.css";
import image from "../images/LorenaPM.jpeg";
import CVeng from "../PDF/CV Lorena Perez Martinez-Front-end-developer_ENG.pdf";
import CVesp from "../PDF/CV Lorena Perez Martinez-Front-end-developer.pdf";

function About() {
  return (
    <div className="about">
      <h2 className="about__title">Sobre mi...</h2>
      <div className="about__card">
        <img
          className="about__card-image"
          src={image}
          alt="imagen Lorena Pérez Martínez"
        />
        <p className="about__card-text">
          Tras más de 15 años ayudando a las empresas a comunicar(se) con
          pasión, he reprogramado mi futuro profesional. ¡Sí, soy desarrolladora
          Front-end junior! Acabo de terminar el bootcamp intensivo de Adalab y
          estoy deseando afrontar nuevos retos profesionales y seguir formándome
          en el campo de la programación. Soy una persona creativa,
          comunicativa, resolutiva y muy acostumbrada a trabajar en equipo. ¿Os
          atrevéis? A cambio, ofrezco el 110% de mí. Solo busco una/mi
          oportunidad.
        </p>
      </div>
      <p className="about__card-text-back">#frontenddeveloper #womenintech</p>
      <div className="about__CV">
        <a href={CVesp} target="_blank" className="about__CV-buttom">
          CV español
        </a>
        <a href={CVeng} target="_blank" className="about__CV-buttom">
          CV inglés
        </a>
      </div>
    </div>
  );
}

export default About;

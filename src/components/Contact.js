import "../styles/contact.css";

import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h2>¿Hablamos?</h2>
      <form className="contact__form">
        <input type="text" name="nombre" placeholder="Tu nombre" />
        <textarea
          cols="30"
          rows="10"
          placeholder="Escribe aquí tu mensaje... ¿Hablamos?"
        ></textarea>
        <button>Enviar mensaje</button>
      </form>
    </div>
  );
}

export default Contact;

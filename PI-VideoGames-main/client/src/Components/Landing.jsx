import React from "react";
import { Link } from "react-router-dom";
import "../Css/Landing.css";

export default function LandingPage() {
  return (
    <div className="fondo">
      <h1 className="frase">
        "UN VIAJE de mil kilometros, <br />
        se inicia con un primer paso"
        <br />
      </h1>
      <Link to="/home">
        <button className="boton">H O M E</button>
      </Link>
    </div>
  );
}

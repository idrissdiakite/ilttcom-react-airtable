import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <section style={{ textAlign: "center" }}>
        <h1>Désolé, la page n'existe pas ! </h1>
        <div className="back" style={{ marginTop: "2rem" }}>
          <Link to="/">
            <p style={{ color: "$color-4" }}>Retourner à l'accueil</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;

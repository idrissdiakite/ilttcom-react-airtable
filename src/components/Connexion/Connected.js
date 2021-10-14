import React from "react";
import { firebase } from "../../utils/firebaseConfig";
import Navigation from "../Navigation"
import Footer from "../Footer";

const Connected = () => {

    const signOut= () => {
        firebase.auth().signOut();
    }
  return (
    <>
      <Navigation />
      <section className="connected">
        <div className="container">
          <h2>{firebase.auth().currentUser.displayName}, <br /> vous êtres déjà connecté !</h2>
          <div>
          <button className="button" onClick={signOut}>Se déconnecter</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Connected;

import React from "react";
import { useHistory } from "react-router-dom"
import { firebase } from "../../utils/firebaseConfig";
import Navigation from "../Navigation"
import Footer from "../Footer";

const Connected = () => {

  const history = useHistory();

    const signOut= () => {
        firebase.auth().signOut();

        let path = "/";
        history.push(path);
    }

  return (
    <>
      <Navigation />
      <section className="connected">
        <div className="container">
          <h2>Hello {firebase.auth().currentUser.displayName}! <br /></h2>
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

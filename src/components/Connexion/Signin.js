import React from "react";
import { firebase } from "../../utils/firebaseConfig";
import "firebase/compat/auth";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Signin = () => {

    const signInWithGoogle = () => {
        let google_provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(google_provider)
          .then((re) => {
            console.log(re);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const signInWithFacebook = () => {
        let facebook_provider = new firebase.auth.FacebookAuthProvider();
        firebase
          .auth()
          .signInWithPopup(facebook_provider)
          .then((re) => {
            console.log(re);
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <>
      <Navigation />
      <section className="login">
        <div className="container">
          <h2>Connexion <br /> <i className="fas fa-long-arrow-alt-down"></i></h2>
          <button onClick={signInWithGoogle}>Google</button> <br />
          <button onClick={signInWithFacebook}>
            Facebook
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signin;

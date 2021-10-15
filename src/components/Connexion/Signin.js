import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial="initial"
      animate="in"
      variants={variants}
      transition={transition}
    >
      <Navigation />
      <motion.section
        className="login"
        initial="initial"
        animate="in"
        variants={variants}
        transition={containerTransition}
      >
        <div className="container">
          <h2>
            Connexion <br /> <i className="fas fa-long-arrow-alt-down"></i>
          </h2>
          <button onClick={signInWithGoogle}>Google</button> <br />
          <button onClick={signInWithFacebook}>Facebook</button>
        </div>
      </motion.section>
      <Footer />
    </motion.div>
  );
};

// Motion
const variants = {
  initial: {
    opacity: 0,
    scale: 1,
    y: -100,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
};

const containerTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 2,
};

export default Signin;

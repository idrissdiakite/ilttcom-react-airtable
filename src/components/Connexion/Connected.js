import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { firebase } from "../../utils/firebaseConfig";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Connected = () => {
  const history = useHistory();

  const signOut = () => {
    firebase.auth().signOut();

    let path = "/";
    history.push(path);
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
        className="connected"
        initial="initial"
        animate="in"
        variants={variants}
        transition={containerTransition}
      >
        <div className="container">
          <h2>
            Hello {firebase.auth().currentUser.displayName}! <br />
          </h2>
          <div>
            <button className="button" onClick={signOut}>
              Se déconnecter
            </button>
          </div>
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

export default Connected;

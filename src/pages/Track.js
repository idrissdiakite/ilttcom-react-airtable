import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Track = () => {
  const { state } = useLocation();
  const track = state.tracks.fields;
  // console.log(track)

  return (
    <motion.div
      className="row"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navigation />

      <section className="single">
        <div className="container">
          <img src={track.Artwork} alt="Artwork" />

          <div className="details">
            <p className="artist">
              Artiste: <span> {track.Artist}</span>
            </p>
            <p>
              Titre: <span> {track.Title}</span>
            </p>
            <p>
              Album:{" "}
              <span>
                {" "}
                {track.Album} ({track.Date})
              </span>
            </p>
            <p className="comment">« {track.Comment} »</p>
          </div>
        </div>
        <p align="center">
          <iframe
            title={state.tracks.id}
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={track.Link}
          ></iframe>
        </p>

        <div className="back">
        <Link to="/">
          <p>Retourner à l'accueil</p>
          </Link>
        </div>

      </section>

      <Footer />
    </motion.div>
  );
};

// Motion
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

export default Track;

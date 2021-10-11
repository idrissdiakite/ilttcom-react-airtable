import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
require("dotenv").config();

// console.log(process.env)

const Music = () => {
  const [tracks, setTracks] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const genres = ["All", ...new Set(tracks.map((track) => track.fields.Genre))];

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

      axios
        .get(
          `https://api.airtable.com/v0/app0YqOZKz4O6SUZa/ilovethistrack.com?api_key=${api_key}`
        )
        .then((res) => {
          setTracks(res.data.records);
        });

    // Je trie les morceaux par date d'ajout
    const sortedTracks = () => {
      const trackObj = Object.keys(tracks).map((i) => tracks[i]); // pour utiliser la fonction sort il faut transformer l'array en objet
      const sortedArray = trackObj.sort((a, b) => {
        return a.fields.Date - b.fields.Date;
      });
      setSortedData(sortedArray);
    };
    sortedTracks();
  }, [tracks]);

  return (
    <motion.div
      className="row"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="filters">
        {genres.map((genre) => {
          return (
            <button
              type="button"
              id={genre}
              key={genre}
              value={genre}
              onClick={(e) => setSelectedGenre(e.currentTarget.value)}
              className="filter-btn"
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div className="music">
        {sortedData
          // je filtre les morceaux en fonction du genre dans le state selectedGenre
          .filter(
            (track) =>
              selectedGenre === "All" ||
              track.fields.Genre.includes(selectedGenre)
          )
          .map((track) => (
            <article className="track" key={track.id}>
              <Link
                to={{
                  pathname: `/track/${track.id}`,
                  state: { tracks: track },
                }}
              >
                <img
                  src={track.fields.Artwork}
                  alt={track.fields.Title}
                  className="cover"
                />
              </Link>
              <h3>{track.fields.Artist}</h3>
              <p>{track.fields.Title}</p>
              <p>{track.fields.Date}</p>
            </article>
          ))}
      </div>
    </motion.div>
  );
};

// Motion
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
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
  duration: 0.8,
};

export default Music;

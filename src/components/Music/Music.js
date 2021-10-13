import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Filter from "./Filter";
import Article from "./Article";
require("dotenv").config();

// console.log(process.env)

const Music = () => {
  const [tracks, setTracks] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("");
  const genres = ["All", ...new Set(tracks.map((track) => track.fields.Genre))];

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    if (playOnce) {
    axios
      .get(
        `https://api.airtable.com/v0/app0YqOZKz4O6SUZa/ilovethistrack.com?api_key=${api_key}`
      )
      .then((res) => {
        setTracks(res.data.records);
        setPlayOnce(false);
      });
    }
    // Je trie les morceaux par date d'ajout
    const sortedTracks = () => {
      const trackObj = Object.keys(tracks).map((i) => tracks[i]); // pour utiliser la fonction sort il faut transformer l'array en objet
      const sortedArray = trackObj.sort((a, b) => {
        return a.fields.Date - b.fields.Date;
      });
      setSortedData(sortedArray);
    };
    sortedTracks();
  }, [tracks, playOnce, selectedGenre]);

  return (
    <motion.div
      className="row"
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      <div className="filters">
        {genres.map((genre) => {
          return <Filter genre={genre} setSelectedGenre={setSelectedGenre} key={genre} />;
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
            <Article track={track} key={track.id}/>
          ))}
      </div>
    </motion.div>
  );
};

// Motion
const variants = {
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
    scale: 1.5,
  },
};

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

export default Music;

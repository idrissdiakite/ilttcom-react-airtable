import React from "react";
import { motion } from "framer-motion";

const Filter = (props) => {
  const { genre, setSelectedGenre } = props;

  return (
    <motion.button
      type="button"
      id={genre}
      key={genre}
      value={genre}
      onClick={(e) => setSelectedGenre(e.currentTarget.value)}
      className="filter-btn"
      transition={transition}
    >
      {genre}
    </motion.button>
  );
};

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 2.5,
};

export default Filter;

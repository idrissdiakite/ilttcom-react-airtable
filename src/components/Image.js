import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Image = () => {
  const [images, setImages] = useState([]);
  console.log(images);

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    axios
      .get(
        `https://api.airtable.com/v0/app0YqOZKz4O6SUZa/gallery?api_key=${api_key}`
      )
      .then((res) => {
        setImages(res.data.records);
      });
  }, [setImages]);

  return (
    <motion.div 
    className="gallery"
    initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
      {images.map((image) => (
        <img
          src={image.fields.Attachments[0].url}
          alt={image.fields.Name}
          key={image.id}
        />
      ))}
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
  duration: 1.5,
};

export default Image;

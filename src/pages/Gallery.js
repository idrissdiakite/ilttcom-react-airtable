import React from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "../components/Image";

const Gallery = () => {

  return (
    <motion.div
    initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}>
      <Navigation />
      <section>
      <Image />
      </section>
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
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
};

export default Gallery;

import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Music from "../components/Music/Music";
import Navigation from "../components/Navigation";

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <Navigation />
      <section>
        <Music />
      </section>
      <Footer />
    </>
  );
};

export default Home;

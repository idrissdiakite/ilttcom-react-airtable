import React, {useState, useEffect} from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Music from "../components/Music";
import Navigation from "../components/Navigation";

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500)
  }, [])

  return loader ? (
    <Loader />
    ) : (
    <>
      <Navigation />
      <Music />
      <Footer />
    </>
  );
};

export default Home;

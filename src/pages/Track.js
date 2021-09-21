import React, {useState, useEffect} from "react";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Track = () => {
  const [loader, setLoader] = useState(true);
  const { state } = useLocation();
  const track = state.tracks.fields;
  // console.log(track)

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

      <section className="single">
        <div className="container">
          <img src={track.Artwork} alt="" />

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
        <iframe
          title={state.tracks.id}
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src={track.Link}
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default Track;

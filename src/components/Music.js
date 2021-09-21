import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Music = () => {
  const [tracks, setTracks] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("");
  const genres = ["All", ...new Set(tracks.map((track) => track.fields.Genre))];

  useEffect(() => {
    if (playOnce) {
      axios
        .get(
          "https://api.airtable.com/v0/app0YqOZKz4O6SUZa/ilovethistrack.com?api_key=keylkmCAGC4x0tDyq"
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
  }, [tracks, playOnce]);

  return (
    <>
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
              <Link to={{
                pathname: `/track/${track.id}`,
                state: {tracks: track}
                }}>
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
    </>
  );
};

export default Music;

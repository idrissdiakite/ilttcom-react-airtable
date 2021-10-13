import React from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
  const { track } = props;

  return (
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
  );
};

export default Article;

import React from "react";

const Filter = (props) => {
    const {genre, setSelectedGenre} = props;

  return (
    <>
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
    </>
  );
};

export default Filter;

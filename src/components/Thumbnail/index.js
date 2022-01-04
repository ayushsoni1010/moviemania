import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieId, clickable, movieHeight }) => {
  return (
    <React.Fragment>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
      )}
    </React.Fragment>
  );
};

export default Thumbnail;

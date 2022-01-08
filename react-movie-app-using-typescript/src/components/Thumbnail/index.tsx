import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Image } from "./Thumbnail.styles";

// Types
type Props = {
  image: string;
  movieId: number;
  clickable: boolean;
  movieHeight: boolean;
}

const Thumbnail: React.FC<Props> = ({ image, movieId, clickable }) => {
  return (
    <React.Fragment>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" movieHeight={true} />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" movieHeight={true} />
      )}
    </React.Fragment>
  );
};

export default Thumbnail;

import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrump from "./BreadCrump";
import MovieInfo from "./MovieInfo";

// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

// Fallback Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <React.Fragment>
      <BreadCrump movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </React.Fragment>
  );
};

export default Movie;

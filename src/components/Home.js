import React, { useState, useEffect } from "react";
// API
import API from "../API";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components
import HeroImage from "./HeroImage";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image: if API fails to render image then the fallback image used this one
import NoImage from "../images/no_image.jpg";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);
  return (
    <React.Fragment>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <Grid header="Popular Movies">
        {state.results.map((movie) => (
          <Thumbnail
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};
export default Home;

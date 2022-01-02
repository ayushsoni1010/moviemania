import { useState, useEffect } from "react";
import API from "../API/API";

const intialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(intialState);
  const [loading, setLoading] = useState(false);
  const [error, setEror] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setEror(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      //   console.log(movies);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setEror(true);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return { state, loading, error, setSearchTerm };
};

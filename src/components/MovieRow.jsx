import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

const API_KEY = "8ea4bfb"; // Replace with your OMDB API key

const MovieRow = ({ title, query }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

MovieRow.propTypes = {
  title: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default MovieRow;
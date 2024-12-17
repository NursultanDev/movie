/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "../App.scss";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img
      src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
      alt={movie.Title}
    />
    <h2>{movie.Title}</h2>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import MovieRow from "./components/MovieRow";
import SearchBar from "./components/SearchBar";

const App = () => {
  const rows = [
    { title: "The Lord of The Rings", query: "The Lord of the Rings" },
    { title: "Star Wars", query: "Star Wars" },
    { title: "Breaking Bad and Better Call Saul", query: "Breaking Bad" },
  ];

  return (
    <div className="app">
      <SearchBar />
      {rows.map((row) => (
        <MovieRow key={row.title} title={row.title} query={row.query} />
      ))}
    </div>
  );
};

export default App;

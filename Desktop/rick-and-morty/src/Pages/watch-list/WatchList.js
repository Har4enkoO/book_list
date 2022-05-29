import React, { useState, useEffect } from "react";

import Header from "../../components/watch-list/header/Header";
import AddForm from "../../components/watch-list/addForm/AddForm";
import MovieList from "../../components/watch-list/movieList/MovieList";

import "./style.css";

const WatchList = () => {
  const initialState = JSON.parse(localStorage.getItem("movies")) || [];
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState(initialState);
  const [editMovie, setEditMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="watch-list-container">
      <div className="watch-list-wrapper">
        <Header />
        <AddForm
          input={input}
          setInput={setInput}
          movies={movies}
          setMovies={setMovies}
          editMovie={editMovie}
          setEditMovie={setEditMovie}
        />
        <MovieList
          movies={movies}
          setMovies={setMovies}
          setEditMovie={setEditMovie}
        />
      </div>
    </div>
  );
};

export default WatchList;

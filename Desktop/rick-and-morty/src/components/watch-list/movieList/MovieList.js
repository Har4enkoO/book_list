import React from "react";

import "./style.css";

const MovieList = ({ movies, setMovies, setEditMovie }) => {
  const handleComplete = (movie) => {
    setMovies(
      movies.map((item) => {
        if (item.id === movie.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findMovie = movies.find((movie) => movie.id === id);
    setEditMovie(findMovie);
  };

  const handleDelete = ({ id }) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return movies.map((movie) => (
    <>
      <div className="list-item" key={movies.id}>
        <input
          type="text"
          value={movie.title}
          className={`list ${movie.completed ? "complete" : ""}`}
          onChange={(event) => event.preventDefault()}
        />
        <button
          className="button-complete movie-button"
          onClick={() => handleComplete(movie)}
        >
          <i className="fa fa-check-circle"></i>
        </button>
        <button
          className="button-edit movie-button"
          onClick={() => handleEdit(movie)}
        >
          <i className="fa fa-edit"></i>
        </button>
        <button
          className="button-delete movie-button"
          onClick={() => handleDelete(movie)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </>
  ));
};

export default MovieList;

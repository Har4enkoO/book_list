import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.css";

const AddForm = ({
  input,
  setInput,
  movies,
  setMovies,
  editMovie,
  setEditMovie,
}) => {
  const updateMovie = (title, id, completed) => {
    const newMovies = movies.map((movie) => {
      return movie.id === id ? { title, id, completed } : movie;
    });
    setMovies(newMovies);
    setEditMovie("");
  };

  useEffect(() => {
    if (editMovie) {
      setInput(editMovie.title);
    } else {
      setInput("");
    }
  }, [setInput, editMovie]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editMovie) {
      setMovies([{ id: uuidv4(), title: input, completed: false }, ...movies]);
      setInput("");
    } else {
      updateMovie(input, editMovie.id, editMovie.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Add new movie..."
        className="movie-input"
        value={input}
        required
        onChange={onInputChange}
      ></input>
      <button className="button-add" type="submit">
        {editMovie ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddForm;

import React, { useState } from "react";

import "./index.css";

export const AddBookForm = ({ onAddNewBook }) => {
  const [book, setBook] = useState({
    isRead: false,
    title: "",
  });

  return (
    <form
      className="add-book-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (book.title.length) {
          onAddNewBook(book);
          setBook({
            isRead: false,
            title: "",
          });
        }
      }}
    >
      <input
        type="text"
        className="add-book-input"
        placeholder="Add new Book..."
        value={book.title}
        onChange={(e) => {
          setBook((prevState) => ({ ...prevState, title: e.target.value }));
        }}
      ></input>
      <button className="add-book-button">Add new book</button>
    </form>
  );
};

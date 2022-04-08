import React from "react";

import "./index.css";
import { Book } from "../book";

export const Books = ({books, onRemoveBook, onReadBook}) => {
  return (
    <div className="books">
      {books.map((book, index) => {
        return <Book key={Date.now()+Math.random()} book={book} count={index + 1} onRemoveBook={onRemoveBook} onReadBook={onReadBook}/>;
      })}
    </div>
  );
};
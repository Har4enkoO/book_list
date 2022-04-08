import React from "react";

import "./index.css";

export const Book = ({ count, book, onRemoveBook, onReadBook }) => {
  const isRead = `${book.isRead ? "isRead" : ""}`;
  return (
    <div className="book-wrapper">
      <span>{count}.</span>
      <span className={isRead}>{book.title}</span>
      <span className="action-buttons">
        <span onClick={() => onRemoveBook(book.id)}>🗑</span>
        <input
          type="checkbox"
          checked={book.isRead}
          onChange={() => onReadBook(book.id)}
        ></input>
      </span>
    </div>
  );
};

import React, { useState } from "react";

import BOOKS_LIST from "./store/books.json";
import { Books } from "./components/books";
import { AddBookForm } from "./components/add-book";
import { Statistic } from "./components/book-statistic";

import "./index.css";

const App = () => {
  const [books, setBooks] = useState(BOOKS_LIST);

  const onAddNewBook = (book) => {
    setBooks((prev) => [...prev, { ...book, id: books.length + 1 }]);
  };

  const onReadBook = (id) => {
    setBooks((prevState) =>
      prevState.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const onRemoveBook = (id) => {
    setBooks((prevState) => prevState.filter((book) => book.id !== id));
  };

  const onRemoveAll = () => {
    setBooks([]);
  };

  const statistic = {
    all: books.length,
    readBooks: books.filter((book) => book.isRead).length,
    notReadBooks: books.filter((book) => !book.isRead).length,
  };

  return (
    <div className="container">
      <AddBookForm onAddNewBook={onAddNewBook} />
      <Statistic {...statistic} onRemoveAll={onRemoveAll} />
      <Books
        books={books}
        onRemoveBook={onRemoveBook}
        onReadBook={onReadBook}
      />
    </div>
  );
};

export default App;

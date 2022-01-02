import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

const storage = JSON.parse(localStorage.getItem("books")) ?? [];

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState(storage);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const lastId = books.length ? books[books.length - 1].id : 0;

  const addBook = (name, author) => {
    setBooks([...books, { id: lastId + 1, name: name, author: author }]);
  };
  const removeBook = (id) => {
    setBooks(
      books.filter((book) => {
        return id !== book.id;
      })
    );
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

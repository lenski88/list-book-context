import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, name: "First book", author: "Petya Ivanov" },
    { id: 2, name: "Second book", author: "Ivan Petrov" },
  ]);
  const lastId = books[books.length - 1].id;
  console.log(lastId);
  const addBook = (name, author) => {
    setBooks([...books], { id: lastId, name: name, author: author });
  };
  const removeBook = (id) => {
    setBooks(
      books.filter((book) => {
        return id !== book.id;
      })
    );
  };
  return (
    <BookContext.Provider value={(books, addBook, removeBook)}>
      {props.children}
    </BookContext.Provider>
  );
};



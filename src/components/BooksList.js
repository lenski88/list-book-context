import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { BookDetails } from "./BookDetails";
import styled from "styled-components";

export const BooksList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <StyledList>
      {books.map((book) => {
        return <BookDetails key={book.id} book={book} id={book.id}/>;
      })}
    </StyledList>
  ) : (
    <StyledEmptyList>
      <h1>You don't have books</h1>
    </StyledEmptyList>
  );
};

const StyledList = styled.ul`
  width: 70%;
  margin: 20px auto;
  transition: all 0.5s;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledEmptyList = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`

import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import styled from "styled-components";

export const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <StyledNavbar>
      <h1>Reading list</h1>
      <p>Currently you have {books.length} books</p>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  text-align: center;
  h1 {
    font-size: 2.4rem;
    margin: 10px;
  }
  p {
    font-size: 1.6rem;
  }
`;

import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { NewBook } from "./NewBook";
import styled from "styled-components";


export const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <StyledNavbar>
      <h1>Reading list</h1>
      <p>Currently you have {books.length} books</p>
      <NewBook/>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  position: sticky;
  top:0;
  background-color: #333745;
  text-align: center;
  z-index: 100;
  h1 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.6rem;
  }
`;

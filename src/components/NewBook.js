import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import styled from "styled-components";

export const NewBook = () => {
  const { addBook } = useContext(BookContext);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const handleSumbit = (eo) => {
    eo.preventDefault();
    addBook(name, author);
    setName("");
    setAuthor("");
  };
  return (
    <StyledNewBookForm onSubmit={handleSumbit}>
      <label>
        Title:
        <input
          type="text"
          value={name}
          onChange={(eo) => setName(eo.target.value)}
          required
          maxLength={30}
          autoFocus
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(eo) => setAuthor(eo.target.value)}
          required
          maxLength={30}
        />
      </label>
      <StyledButtonAdd type="submit" name={name} author={author}>
        &#43;
      </StyledButtonAdd>
    </StyledNewBookForm>
  );
};

const StyledNewBookForm = styled.form`
  position: relative;
  width: 40%;
  margin: 10px auto;
  transition: all 0.5s;

  & label {
    font-size: 1.8rem;

    & input {
      width: 100%;
      height: 36px;
      margin: 5px 0;
      padding: 3px;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 5px;
      outline: none;
      color: #fff;
      font-size: 2.4rem;
    }
  }

  @media (max-width: 768px) {
    width: 65%;
  }
`;

const StyledButtonAdd = styled.button`
  position: absolute;
  right: -45px;
  top: 40px;
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 6rem;
  transition: all 0.5s;

  cursor: ${({ name, author }) => (name && author ? "pointer" : "default")};

  animation: ${({ name, author }) =>
    name && author ? "animButton .5s alternate infinite" : null};

  opacity: ${({ name, author }) => (name && author ? 1 : 0.5)};

  @keyframes animButton {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.8);
    }
  }
`;

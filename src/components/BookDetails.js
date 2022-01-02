import React, { useContext, useState, useEffect } from "react";
import { BookContext } from "../context/BookContext";
import styled from "styled-components";

export const BookDetails = ({ book, id }) => {
  const [isRemove, setIsRemove] = useState(false);
  const { removeBook } = useContext(BookContext);

  return (
    <StyledListItem isRemove={isRemove}>
      <p>{book.name}</p>
      <p>{book.author}</p>
      <button
        onClick={() => {
          setIsRemove(true);
          setTimeout(() => {
            removeBook(id);
          }, 250);
        }}
      >
        &#10007;
      </button>
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  position: relative;
  margin: 10px 0;
  padding: 5px;
  text-align: center;
  font-size: 1.8rem;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: #fff 0 0 2px;
  transition: all 0.1s;
  animation: ${({ isRemove }) => (isRemove ? "animDelete .25s" : 'animAdd .25s')};

  p:first-child {
    font-size: 2.4rem;
    font-weight: bold;
  }

  & button {
    position: absolute;
    top: 0px;
    right: 5px;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: red;
    }
  }

  &:hover {
    opacity: 0.98;
    transform: scale(1.03);
    box-shadow: #fff 0 0 10px;
  }

  @keyframes animDelete {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(1000px);
    }
  }
  @keyframes animAdd {
    from {
      transform: translateX(-1000px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

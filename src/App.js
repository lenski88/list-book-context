import { Navbar } from "./components/Navbar";
import { BooksList } from "./components/BooksList";
import { BookContextProvider } from "./context/BookContext";
import { VideoBg } from "./components/VideoBg";
import { GlobalStyles } from "./globalStyles";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <VideoBg />
      <StyledApp>
        <BookContextProvider>
          <Navbar />
          <BooksList />
        </BookContextProvider>
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div`
  height: 90vh;
  max-width: 960px;
  background-color: #333745;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: #70768d 0px 0px 15px;
  color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: .88;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #333745;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background: #333745;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #2a2c35;
    border: 1px solid #aaa;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #c5c8d7;
  }
`;

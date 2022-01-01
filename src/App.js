import { Navbar } from "./components/Navbar";
import { BookContextProvider } from "./context/BookContext";
import { GlobalStyles } from "./globalStyles";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <BookContextProvider>
          <Navbar />
        </BookContextProvider>
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 90vh;
  max-width: 960px;
  background-color: #333745;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: #70768d 0px 0px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  overflow: auto;
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
html {
    font-size: 62.5%;
}
body {
    background-color: #494E62;
    overflow: hidden;
}

ul {
    list-style-type: none;
}
`;

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Staatliches');
    font-family: 'Staatliches', cursive;
    background-color: #f3f3f3;
  }
`;

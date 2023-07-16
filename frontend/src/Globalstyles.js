import { createGlobalStyle } from "styled-components";
import font from "./Fonts/Fontspring-DEMO-hernandezbros-regular.otf";

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'OurFont';
    src: url(${font});
    font-weight: 300;
    font-style: normal;
  }
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@500&family=Lato:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@500&display=swap');
  *{
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-weight:400;
  font-family: 'Figtree', sans-serif;
 
}

  body {
    margin: 0;
    padding: 0;
    background-color:#d1cbb8;
    overflow-x: hidden;
   }

   .gLIJZe{
    overflow-y: hidden;
   }
   
`;

export default GlobalStyle;

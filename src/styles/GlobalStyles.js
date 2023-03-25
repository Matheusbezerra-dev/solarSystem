import { createGlobalStyle } from 'styled-components';
import imgbackground from '../images/background.png';

const GlobalStyled = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    background-image: url(${imgbackground});
  }
`;

export default GlobalStyled;

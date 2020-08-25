import { createGlobalStyle } from 'styled-components';
// import CovidImg from './assets/images/covid-black-white.jpg';

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    line-height: normal;
    font-family: 'Roboto', sans-serif;
  }
  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }
  #root {
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 111, .9)150%);
    height: 100%;
    width: 100%;
    background-size: cover;
    background-color: grey;
    background-position: center center;
  }
  .mb-2 {
    margin-bottom: 16px;
  }
  .pt-2 {
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
  }
  .cursor {
    cursor: pointer;
  }
`;

export default globalStyle;

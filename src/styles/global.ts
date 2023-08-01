import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p{
    margin: 0;
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.white.ligth};
    &:hover{
      text-decoration: none;
    }
  }

  body {
    background: ${(props) => props.theme.colors.gray.gray20};
    font-size: 16px;
    color: ${(props) => props.theme.colors.white.ligth};
    font-family: 'Roboto', monospace;

    .font-title{
      font-family: 'Lato', monospace !important;
    }

    height: 1500px;

  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
`;

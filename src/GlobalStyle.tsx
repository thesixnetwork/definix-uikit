import { createGlobalStyle } from "styled-components"
import { ResetCSSStyle } from "./ResetCSS";

const GlobalStyle = createGlobalStyle`
  ${ResetCSSStyle}
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  html {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.greyscale.white};
    font-family: 'Roboto',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #404041;
    font-weight: 500;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle

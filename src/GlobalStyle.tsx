import { createGlobalStyle } from "styled-components"
import { ResetCSSStyle } from "./ResetCSS";
import { TypoStyle } from "./TypoStyle";

const GlobalStyle = createGlobalStyle`
  ${ResetCSSStyle}
  ${TypoStyle}
  html {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.greyscale.white};
    font-family: 'Roboto',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle

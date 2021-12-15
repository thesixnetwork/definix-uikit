import { createGlobalStyle, css } from "styled-components";
import { ResetCSSStyle } from "./ResetCSS";
import { ColorStyles } from "./theme/colors";
import { space } from "./theme/base";
import { pxToRem } from "./style/mixin";

/*
// Safari for OS X and iOS (San Francisco)
-apple-system,
// Chrome < 56 for OS X (San Francisco)
BlinkMacSystemFont,
// Windows
"Segoe UI",
// Android
"Roboto",
// Basic web fallback
"Helvetica Neue", Arial, sans-serif,
// Emoji fonts
"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
*/

function createSpacing() {
  const sizes = [0, 0.25, 0.5, 1, 1.25, 1.5, 2, 3, 4, 6];
  const props = ["margin", "padding"];
  const styles = props
    .flatMap((prop) => {
      const initial = prop.substr(0, 1);
      return `
        ${sizes
          .map(
            (size, i) => `
          .${initial}a-${i} {
            ${prop}: ${size}rem !important;
          }
        `
          )
          .join("")}
        ${sizes
          .map(
            (size, i) => `
          .${initial}t-${i} {
            ${prop}-top: ${size}rem !important;
          }
        `
          )
          .join("")}
        ${sizes
          .map(
            (size, i) => `
          .${initial}b-${i} {
            ${prop}-bottom: ${size}rem !important;
          }
        `
          )
          .join("")}
        ${sizes
          .map(
            (size, i) => `
          .${initial}l-${i} {
            ${prop}-left: ${size}rem !important;
          }
        `
          )
          .join("")}
        ${sizes
          .map(
            (size, i) => `
          .${initial}r-${i} {
            ${prop}-right: ${size}rem !important;
          }
        `
          )
          .join("")}
        ${sizes
          .map(
            (size, i) => `
          .${initial}x-${i} {
            ${prop}-left: ${size}rem !important;
            ${prop}-right: ${size}rem !important;
          }
        `
          )
          .join("")}
        ${sizes
          .map(
            (size, i) => `
          .${initial}y-${i} {
            ${prop}-top: ${size}rem !important;
            ${prop}-bottom: ${size}rem !important;
          }
        `
          )
          .join("")}
      `;
    })
    .join("");

  const custom = props
    .flatMap((prop) => {
      const initial = prop.substr(0, 1);
      const customSizes = Object.entries(space).map(([key, value]) => [
        key.toLowerCase().replace("_", ""),
        pxToRem(value),
      ]);
      return `
        ${customSizes
          .map(
            ([i, size]) => `
          .${initial}a-${i} {
            ${prop}: ${size} !important;
          }
        `
          )
          .join("")}
        ${customSizes
          .map(
            ([i, size]) => `
          .${initial}t-${i} {
            ${prop}-top: ${size} !important;
          }
        `
          )
          .join("")}
        ${customSizes
          .map(
            ([i, size]) => `
          .${initial}b-${i} {
            ${prop}-bottom: ${size} !important;
          }
        `
          )
          .join("")}
        ${customSizes
          .map(
            ([i, size]) => `
          .${initial}l-${i} {
            ${prop}-left: ${size} !important;
          }
        `
          )
          .join("")}
        ${customSizes
          .map(
            ([i, size]) => `
          .${initial}r-${i} {
            ${prop}-right: ${size} !important;
          }
        `
          )
          .join("")}
        ${customSizes
          .map(
            ([i, size]) => `
          .${initial}x-${i} {
            ${prop}-left: ${size} !important;
            ${prop}-right: ${size} !important;
          }
        `
          )
          .join("")}
        ${customSizes
          .map(
            ([i, size]) => `
          .${initial}y-${i} {
            ${prop}-top: ${size} !important;
            ${prop}-bottom: ${size} !important;
          }
        `
          )
          .join("")}
      `;
    })
    .join("");

  return css`
    ${styles}
    ${custom}
  `;
}

const GlobalStyle = createGlobalStyle`
  ${ResetCSSStyle}

  :root {
    --default-font-family: Roboto;
  }

  html {
    font-size: 16px;
  }

  html[lang="ko"] {
    --default-font-family: Noto Sans KR;
  }

  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
    -apple-system,BlinkMacSystemFont,"Malgun Gothic","맑은 고딕",helvetica,"Apple SD Gothic Neo",sans-serif
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  html[lang="en"] body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  html[lang="ko"] body {
    font-family: Noto Sans KR, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  .btn-secondary-disable:disabled {
    background: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
    border-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
    color: ${({ theme }) => theme.colors[ColorStyles.RED]};

    svg { fill: ${({ theme }) => theme.colors[ColorStyles.WHITE]}; }
  }

  .text-bold { font-weight: 600 !important; }
  .text-right { text-align: right; }
  .text-left { text-align: left; }

  .color-primary { color: ${({ theme }) => theme.colors[ColorStyles.RED]} !important; }
  .color-text { color: ${({ theme }) => theme.colors[ColorStyles.RED]} !important; }
  .color-disable { color: ${({ theme }) => theme.colors[ColorStyles.WHITE]} !important; }

  .pos-relative { position: relative; }
  .pos-static { position: static; }

  .dis-in-block { display: inline-block !important; }  

  .slider-profile .slick-slider {
    display: flex; flex-direction: column; align-items: stretch; height: 100%;

    * { outline: none; }

    .slick-list { 
      flex-grow: 1;

      .slick-track, .slick-slide > div { height: 100%; border: none; outline: none; }
      .slick-slide > div { padding: 16px; display: flex; justify-content: center; align-items: center; }
      .slick-slide:not(.slick-center) { opacity: 0.5; }
      .slick-slide.slick-center { transform: scale(1.2); }
    }

    .slick-prev, .slick-next { z-index: 1; }
    .slick-prev { left: 0; }
    .slick-next { right: 0; }
  }

  .slick-dots {
    height: 48px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    bottom: 0;

    li { 
      margin: 0; width: auto; height: auto; padding: 0 4px;

      button {
        margin: 0; width: auto; height: auto; display: block; padding: 4px;

        &:before {
          content: '';
          width: 8px;
          height: 8px;
          background: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
          border-radius: ${({ theme }) => theme.radii.circle};
        }
      }

      &.slick-active {
        button {
          width: 20px;

          &:before { width: 20px; border-radius: ${({ theme }) => theme.radii.small}; }
        }
      }
    }
  }

  .flex {
    display: flex !important;
  
    &.flex-column { flex-direction: column; }
    &.flex-column-reverse { flex-direction: column-reverse; }
    &.flex-row { flex-direction: row; }
    &.flex-row-reverse { flex-direction: row-reverse; }
    &.flex-wrap { flex-wrap: wrap; }
    &.flex-grow { flex-grow: 1; }
    &.justify-start { justify-content: flex-start; }
    &.justify-end { justify-content: flex-end; }
    &.justify-center { justify-content: center; }
    &.justify-space-around { justify-content: space-around; }
    &.justify-space-between { justify-content: space-between; }
    &.align-start { align-items: flex-start; }
    &.align-end { align-items: flex-end; }
    &.align-center { align-items: center; }
    &.align-baseline { align-items: baseline; }
    &.align-stretch { align-items: stretch; }

    .align-self-center { align-self: center; }
    .align-self-start { align-self: flex-start; }
    .align-self-end { align-self: flex-end; }

    .justify-self-center { align-self: center; }
    .justify-self-start { align-self: flex-start; }
    .justify-self-end { align-self: flex-end; }
  
    .flex-grow { flex-grow: 1; }
    .flex-shrink { flex-shrink: 0; }
    .col-12 { width: 100%; }
    .col-9 { width: 75%; }
    .col-8 { width: 66.666%; }
    .col-7 { width: 60%; }
    .col-6 { width: 50%; }
    .col-5 { width: 40%; }
    .col-4 { width: 33.333%; }
    .col-3 { width: 25%; }
  }

  .bd { border: 1px solid ${({ theme }) => theme.colors[ColorStyles.LIGHTGREY]}; }
  .bd-t { border-top: 1px solid ${({ theme }) => theme.colors[ColorStyles.LIGHTGREY]}; }
  .bd-r { border-right: 1px solid ${({ theme }) => theme.colors[ColorStyles.LIGHTGREY]}; }
  .bd-b { border-bottom: 1px solid ${({ theme }) => theme.colors[ColorStyles.LIGHTGREY]}; }
  .bd-l { border-left: 1px solid ${({ theme }) => theme.colors[ColorStyles.LIGHTGREY]}; }
  .bd-x { border-right: 1px solid ${({ theme }) => theme.colors[ColorStyles.LIGHTGREY]}; border-left: 1px solid ${({
  theme,
}) => theme.colors[ColorStyles.LIGHTGREY]}; }
  .bd-y { border-top: 1px solid ${({ theme }) => theme.colors[ColorStyles.LIGHTGREY]}; border-bottom: 1px solid ${({
  theme,
}) => theme.colors[ColorStyles.LIGHTGREY]}; }
  .bd-t-n { border-top: none !important; }
  .bd-r-n { border-right: none !important; }
  .bd-b-n { border-bottom: none !important; }
  .bd-l-n { border-left: none !important; }
  .bd-x-n { border-right: none; border-left: none !important; }
  .bd-y-n { border-top: none; border-bottom: none !important; }
  .w-100 { width: 100% !important; }
  .w-auto { width: auto !important; }
  .h-100 { height: 100% !important; }
  .h-auto { height: auto !important; }

  ${createSpacing()}

  .tooltip-container {
    z-index: 99999;
  }
  
  /*# sourceMappingURL=s.css.map */
`;

export default GlobalStyle;

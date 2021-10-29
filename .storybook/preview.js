import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import GlobalStyle from "../src/GlobalStyle";
import { ModalProvider } from "../src/widgets/Modal";

const globalDecorator = (StoryFn) => (
  <ModalProvider>
    <GlobalStyle />
    <StoryFn />
  </ModalProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
};

const themes = [
  {
    name: "Light",
    backgroundColor: light.colors.background,
    ...light,
  },
  {
    name: "Dark",
    backgroundColor: dark.colors.background,
    ...dark,
  },
];

export const decorators = [globalDecorator, withThemesProvider(themes)];

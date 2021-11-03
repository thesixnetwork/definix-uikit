/*
:root {
  --01-main-red: #ff5532;
  --02-sub-orange: #ff6828;
  --02-sub-yellow: #fea948;
  --02-sub-green: #02a1a1;
  --03-brownscale-brownscale-01-pale: #dad0c5;
  --03-brownscale-brownscale-02-lightbrown: #b4a9a8;
  --03-brownscale-brownscale-03-brown: #5e515f;
  --03-brownscale-brownscale-04-deepbrown: #413343;
  --04-greyscale-greyscale-01-white: #fff;
  --04-greyscale-greyscale-02-lightgrey: #e0e0e0;
  --04-greyscale-greyscale-03-mediumgrey: #999;
  --04-greyscale-greyscale-04-deepgrey: #666;
  --04-greyscale-greyscale-05-black: #222;
  --05-bg-bg-yellow-02: #ffedcb;
  --05-bg-bg-yellow-01: #fffbf5;
}
*/

export enum ColorStyles {
  RED = 'red',
  ORANGE = 'orange',
  YELLOW = 'yellow',
  GREEN = 'green',
  PALE = 'pale',
  LIGHTBROWN = 'lightbrown',
  BROWN = 'brown',
  DEEPBROWN = 'deepbrown',
  WHITE = 'white',
  LIGHTGREY = 'lightgrey',
  MEDIUMGREY = 'mediumgrey',
  DEEPGREY = 'deepgrey',
  BLACK = 'black',
  YELLOWBG2 = 'yellowBg2',
  YELLOWBG1 = 'yellowBg1',
}

export const baseColors = {
  [ColorStyles.RED]: "#ff5532",
  [ColorStyles.ORANGE]: "#ff6828",
  [ColorStyles.YELLOW]: "#fea948",
  [ColorStyles.GREEN]: "#02a1a1",
  [ColorStyles.PALE]: "#dad0c5",
  [ColorStyles.LIGHTBROWN]: "#b4a9a8",
  [ColorStyles.BROWN]: "#5e515f",
  [ColorStyles.DEEPBROWN]: "#413343",
  [ColorStyles.WHITE]: "#ffffff",
  [ColorStyles.LIGHTGREY]: "#e0e0e0",
  [ColorStyles.MEDIUMGREY]: "#999999",
  [ColorStyles.DEEPGREY]: "#666666",
  [ColorStyles.BLACK]: "#222222",
  [ColorStyles.YELLOWBG2]: "#ffedcb",
  [ColorStyles.YELLOWBG1]: "#fffbf5",
}

export const lightColors = {
  ...baseColors,
};
export const darkColors = {
  ...baseColors,
};
export default {}

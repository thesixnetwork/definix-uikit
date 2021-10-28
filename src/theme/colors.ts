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
export const baseColors = {
  main: {
    red: '#ff5532',
  },
  sub: {
    orange: '#ff6828',
    yellow: '#fea948',
    green: '#02a1a1',
  },
  brownscale: {
    pale: '#dad0c5',
    lightbrown: '#b4a9a8',
    brown: '#5e515f',
    deepbrown: '#413343',
  },
  greyscale: {
    white: '#fff',
    lightgrey: '#e0e0e0',
    mediumgrey: '#999',
    deepgrey: '#666',
    black: '#222',
  },
  bg: {
    yellow: ['#fffbf5', '#ffedcb']
  }
};

export const lightColors = {
  ...baseColors,
};
export const darkColors = {
  ...baseColors,
};
export default {}

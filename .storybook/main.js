const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "themeprovider-storybook/register",
  ],
  webpackFinal: (config) => {
    const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query
    };

    // Merge our rule with existing assetLoader rules
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", assetLoader]
    });

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
};
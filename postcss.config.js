const autoprefixer = require('autoprefixer');
const postcssPxToViewport = require('@ttou/postcss-px-to-viewport');
const postcssPresetEnv = require('postcss-preset-env');
const postcssSass = require('@csstools/postcss-sass');

module.exports = {
  syntax: require('postcss-scss'),
  plugins: [
    autoprefixer,
    postcssPxToViewport({
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 3,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      minPixelValue: 1,
      exclude: /([\/\\])(node_modules)([\/\\])/,
    }),
    postcssPresetEnv({
      stage: 0,
      features: {
        'custom-properties': {
          preserve: true,
        },
      },
    }),
    postcssSass,
  ],
};

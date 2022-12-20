const {merge} = require('webpack-merge');
const baseConfig = require('./build/webpack.base');
const devConfig = require('./build/webpack.dev');
const prodConfig = require('./build/webpack.prod');

module.exports = (env, argv) => {
  switch (argv.mode) {
    case 'development':
      return merge(baseConfig, devConfig);
    case 'production':
      return merge(baseConfig, prodConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};

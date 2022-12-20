const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const WebpackBar = require('webpackbar');
const glob = require('glob');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:8].css',
      chunkFilename: 'css/[name]_[contenthash:8].css',
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, '../src')}/**/*`, {nodir: true}),
    }),
    new WebpackBar(),
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: 'node_modules',
        parallel: true,
        minify: TerserWebpackPlugin.swcMinify,
        extractComments: false,
        terserOptions: {
          compress: {drop_console: true, drop_debugger: true},
        },
      }),
      new CssMinimizerPlugin({parallel: true, minify: CssMinimizerPlugin.swcMinify}),
    ],
  },
};

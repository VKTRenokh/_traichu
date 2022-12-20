const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const fileName = ['index'];
const isProd = process.env.NODE_ENV === 'production';
const styleHandler = isProd ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: fileName.reduce((config = {}, file) => {
    config[file] = `./${file}.ts`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: (pathToFile) => {
      return pathToFile.chunk.name === 'js/[name].[contenthash]'
        ? 'js/[name].[contenthash].js'
        : 'js/[name].[contenthash].js';
    },
    clean: {
      dry: false,
      keep: /\.git/,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@data': path.resolve(__dirname, '../src/data'),
      '@view': path.resolve(__dirname, '../src/view'),
    },
    extensions: ['.ts', '.js', '.json', '.scss'],
  },
  plugins: [].concat(
    fileName.map(
      (file) =>
        new HtmlWebpackPlugin({
          inject: 'head',
          template: `./${file}.html`,
          filename: `./${file}.html`,
          chunks: [file],
          minify: {
            html5: true,
            collapseWhitespace: true,
            removeComments: true,
            removeTagWhitespace: true,
          },
        }),
    ),
    [
      new FriendlyWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        typescript: {
          configFile: '../tsconfig.json',
        },
        devServer: true,
      }),
    ].filter(Boolean),
  ),
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [styleHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(ts?|js?)$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workerParallelJobs: 2,
              cacheGroups: {
                default: {
                  reuseExistingChunk: true,
                  chunks: 'all',
                  priority: -20,
                  name: 'default',
                  test: /\.(ts|js)$/,
                  enforce: true,
                  minSize: 0,
                  minChunks: 2,
                },
              },
            },
          },
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico|avif|mp3)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/img/[name][hash][ext][query]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[name].[ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
          enforce: true,
          chunks: 'all',
          minSize: 0,
          minChunks: 1,
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../cache'),
    hashAlgorithm: 'md5',
    buildDependencies: {
      config: [path.join(__dirname, '../webpack.config.js')],
    },
  },
  experiments: {
    asyncWebAssembly: true,
  },
};

const base = () => {
  return 'переписаные плагины';
};

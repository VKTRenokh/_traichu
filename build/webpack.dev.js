const path = require('path');

const defaultUrls = [];

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    allowedHosts: 'auto',
    open: true,
    compress: true,
    port: 4321,
    hot: false,
    proxy: {
      context: defaultUrls.map((itUrl) => `/${itUrl}`),
      '/api': {
        target: 'http://localhost:4321',
        pathRewrite: {'^/api': ''},
      },
      before(app) {
        app.use((req, res, next) => {
          if (req.url.indexOf('/api') === 0 || req.url.indexOf('/static') === 0) {
            res.setHeader('Access-Control-Allow-Origin', '*');
          }
          next();
        });
      },
    },
  },
};

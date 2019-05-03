const StyleLintPlugin = require('../../');

const webpack = require('./webpack');

const configFilePath = getPath('./.stylelintrc');

const baseConfig = {
  entry: './index',
  mode: 'development',
  output: {
    path: getPath('output'),
  },
  plugins: [
    new StyleLintPlugin({
      configFile: configFilePath,
    }),
  ],
};

if (typeof webpack.LoaderOptionsPlugin === 'undefined') {
  baseConfig.debug = false;
} else {
  baseConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      debug: false,
    })
  );
}

module.exports = baseConfig;

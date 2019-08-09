const configFactory = require('react-scripts/config/webpack.config');
const webpack = require('webpack');

module.exports = (webpackEnv) => {
  const defaultConfig = configFactory(webpackEnv);
  const config = {
    ...defaultConfig,
    output: {
      ...defaultConfig.output,
      filename: 'hello_world_bundle.js',
      chunkFilename: 'hello_world_vendor_bundle.js',
    },
    plugins: [
      ...defaultConfig.plugins,
      new webpack.DefinePlugin({ '__DEV__': 'true' }),
    ]
  }
  return config;
}

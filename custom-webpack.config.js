const path = require("path");
const webpack = require("webpack");

module.exports = (config, options) => {

  const projectDirectory = path.resolve(__dirname, './src/app');
  const country = options.tsConfig.split('.')[1];

  console.log(`country selected`, country);
  config.resolve.alias['@countries'] = `${projectDirectory}/countries/${country}`;

  return config;
};

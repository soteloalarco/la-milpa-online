/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: '/src/index.ts',
  target: 'node',
  output: {
    filename: 'server.generated.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new NodemonPlugin()],
  externals: [nodeExternals()],
};

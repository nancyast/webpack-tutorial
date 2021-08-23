const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader']
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Webpack tutorial',
      meta: {
        desc: "some description"
      },
      template: 'src/index.hbs'
    })
  ]
}
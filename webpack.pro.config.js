const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'kiwi': './src/kiwi.js'
  },
  output: {
    filename: '[name].[contenthash].js',
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
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello world',
      meta: {
        desc: "Hello world"
      },
      template: 'src/index.hbs',
      minify: false
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: 'Kiwi page',
      meta: {
        desc: "Kiwi page"
      },
      template: 'src/index.hbs',
      minify: false
    })
  ]
}
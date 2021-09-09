const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    clean: true,
  },
  mode: 'development',
  devServer: {
    port: 9000,
    hot: true,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: './index.html',
      writeToDisk: true,
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
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
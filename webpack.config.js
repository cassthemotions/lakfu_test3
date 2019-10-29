const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/main.js', './src/main.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { minimize: true, sourceMap: true } },
            { loader: 'resolve-url-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },

          ]
        })
      },

      {
        test: /\.(jpg|png|gif|ico|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {name: '[name].[ext]', publicPath: 'img/', outputPath: 'img/'}
        }]
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true
            }
          }
        ]
      }
    ]
  },
  plugins: [

    new ExtractTextPlugin({ // define where to save the file
      filename: 'style.css',
      allChunks: true,
    }),

    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: 'index.html'
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })

  ],
};

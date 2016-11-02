var nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server.js',
  output: {
    path: './dist',
    filename: 'server.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "css-loader"
      },
    ]
  }
},
{
  entry: './src/index.js',
  output: {
    path: './dist/assets',
    publicPath: '/',
    filename: 'index.js'
  },
  plugins: [
    new ExtractTextPlugin("index.css"),
    new ExtractTextPlugin("App.css")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
    ]
  }
}
];

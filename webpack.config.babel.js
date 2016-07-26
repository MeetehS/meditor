import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const config = {
  devtool: '#source-map',
  entry: {
    home: ['babel-polyfill', './src/index.jsx'],
    vendor: [
      'github-markdown-css',
      'immutable',
      'isomorphic-fetch',
      'marked',
      'normalize.css',
      'react',
      'react-css-modules',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-actions',
      'redux-immutable',
      'redux-promise',
    ],
  },
  output: {
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      include: path.resolve(__dirname, 'src'),
      test: /\.jsx?$/,
      loader: 'babel',
    }, {
      include: path.resolve(__dirname, 'src'),
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]',
    }, {
      include: [
        path.resolve(__dirname, 'node_modules/normalize.css'),
        path.resolve(__dirname, 'node_modules/github-markdown-css'),
      ],
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      include: path.resolve(__dirname, 'src'),
      test: /\.(png|jpg|eot|svg|ttf|woff|woff2|otf)\??.*$/,
      loader: 'url-loader?limit=8192',
    }],
  },
  plugins: [
    new HTMLWebpackPlugin({ title: 'MEditor' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
  ],
}

export default config

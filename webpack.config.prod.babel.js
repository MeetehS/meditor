import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

import devConfig from './webpack.config.babel'

const { entry, output, resolve, module, postcss } = devConfig
const { home } = entry

const config = {
  entry: {
    home,
    vendor: [
      'github-markdown-css',
      'immutable',
      'isomorphic-fetch',
      'marked',
      'normalize.css',
      'react',
      'react-css-modules',
      'react-dom',
      'react-immutable-proptypes',
      'react-redux',
      'redux',
      'redux-actions',
      'redux-immutable',
    ],
  },
  output,
  resolve,
  module,
  plugins: [
    new HTMLWebpackPlugin({
      title: 'MEditor',
      favicon: './src/icons/favicon/favicon.ico',
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
  postcss,
}

export default config

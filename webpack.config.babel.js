import HTMLWebpackPlugin from 'html-webpack-plugin'
import values from 'postcss-modules-values'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const config = {
  devtool: 'eval-source-map',
  entry: {
    app: ['./src/index.jsx'],
    vendor: [
      'immutable',
      'isomorphic-fetch',
      'marked',
      'mousetrap',
      'react',
      'react-css-modules',
      'react-dom',
      'react-immutable-proptypes',
      'react-redux',
      'redux',
      'redux-actions',
      'redux-immutable',
      'redux-promise',
    ],
  },
  output: {
    path: `${__dirname}/public`,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
  module: {
    loaders: [{
      include: `${__dirname}/src`,
      test: /\.jsx?$/,
      loader: 'babel',
    }, {
      include: `${__dirname}/src`,
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?modules&localIdentName=[local]-[hash:base64:5]!postcss'
      ),
    }, {
      include: [
        `${__dirname}/node_modules/normalize.css`,
        `${__dirname}/node_modules/github-markdown-css`,
        `${__dirname}/node_modules/balloon-css`,
      ],
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css'),
    }, {
      include: `${__dirname}/src/icons/svgs`,
      test: /\.svg$/,
      loader: 'babel!svg-react',
    }, {
      include: `${__dirname}/src/imgs}`,
      test: /\.(png|jpg|eot|ttf|woff|woff2|svg|otf)\??.*$/,
      loader: 'url-loader?limit=8192',
    }],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      favicon: './src/icons/favicon/favicon.ico',
    }),
    new ExtractTextPlugin('[name]-[hash].css'),
  ],
  postcss: [values, autoprefixer],
}

export default config

import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import values from 'postcss-modules-values'
import autoprefixer from 'autoprefixer'

const config = {
  devtool: '#source-map',
  entry: {
    home: ['./src/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname),
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
      loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!postcss-loader',
    }, {
      include: [
        path.resolve(__dirname, 'node_modules/normalize.css'),
        path.resolve(__dirname, 'node_modules/github-markdown-css'),
      ],
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      include: path.resolve(__dirname, 'src/icons/svgs'),
      test: /\.svg$/,
      loader: 'babel!svg-react',
    }, {
      include: path.resolve(__dirname, 'src/imgs'),
      test: /\.(png|jpg|eot|ttf|woff|woff2|svg|otf)\??.*$/,
      loader: 'url-loader?limit=8192',
    }],
  },
  plugins: [
    new HTMLWebpackPlugin({ title: 'MEditor' }),
  ],
  postcss: [values, autoprefixer],
}

export default config

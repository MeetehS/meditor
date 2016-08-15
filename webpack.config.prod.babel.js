import { optimize } from 'webpack'

import defaultConfig from './webpack.config.babel'

const { OccurenceOrderPlugin, CommonsChunkPlugin, UglifyJsPlugin } = optimize

const { entry, output, resolve, module, plugins, postcss } = defaultConfig

const config = {
  entry,
  output,
  resolve,
  module,
  postcss,
  plugins: [
    ...plugins,
    new OccurenceOrderPlugin(),
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new UglifyJsPlugin({ compress: { warnings: false } }),
  ],
}

export default config

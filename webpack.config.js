const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  watch:   true,
  entry: [
    __dirname + '/js/mojs-player.js'
  ],
  module: {
    rules: [
      { test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /\.(pcss)$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]___[hash:base64:5]"
              },
            },
          },
          'postcss-loader',
        ],
      },
    ]
  },
  output: {
    path:           __dirname + '/build',
    filename:       'mojs-player.js',
    publicPath:     'build/',
    library:        'mojs-player',
    libraryTarget:  'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

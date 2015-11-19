module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname,
    filename: './app/assets/javascripts/home.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015'],
          plugins: ['transform-es2015-modules-umd', 'transform-runtime'],
        }
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: '\.jpg$', loader: 'file-loader' },
      { test: '\.png$', loader: 'url-loader?mimetype=image/png' },

      // bootstrap-webpack
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
}

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
    ]
  }
}

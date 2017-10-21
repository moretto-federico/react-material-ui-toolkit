const path = require('path');

const root = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist'),
  modules: path.join(__dirname, 'node_modules'),
};

module.exports = {
  entry: {
    app: ['./src/view/boot.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'dist/',
    filename: 'XXX.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: root.modules,
  },
  resolveLoader: {
    fallback: root.modules,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          babelrc: false,
          cacheDirectory: true,
          extends: path.join(__dirname, '/.babelrc'),
        },
        include: /src/,
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: /src/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: /src|node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?importLoaders=1', 'postcss', 'sass'],
        include: /src|node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: 'file-loader',
        query: {
          name: '[path]__[name].[ext]?[hash:5]',
        },
        include: /src|node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        query: {
          name: '[path]__[name].[ext]?[hash:5]',
        },
        include: /src|node_modules/,
      },
    ],
  },
  // produce map source file to use in browser debugger
  devtool: 'eval',
  // TODO to redirect some request
  // proxy: {
  // "/todo/todo*": {
  //     target: 'https://localhost:8080/todo/',
  //     secure: false
  //   }
  // }
};

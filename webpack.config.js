const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, './build'), // путь к каталогу выходных файлов - папка public
    filename: 'main.bundle.js', // название создаваемого файла
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /(.png|((?<!.cmp).svg)|.jpg|.gif|.jpeg|.woff|.woff2|.eot|.ttf|.otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      src: path.resolve(__dirname, 'source'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'source/html/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '/build/'),
    },
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};

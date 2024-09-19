const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
    
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
     template:  path.resolve(__dirname, './index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    [ '@babel/preset-env' ],
                ],
            },
        },
    }
    ],
  },
  devtool: 'source-map',
  devServer:{
    port:3000,
    open:true,
    historyApiFallback: true,
    hot: true,   
  },
};

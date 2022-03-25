const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpackConfig = {
  target: 'node',
  entry: {
    server: path.join(__dirname, '../src/app.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.join(__dirname, '../src')
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, '../src/index.js'), 'node_modules'],
    extensions: ['.js', '.json'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(), // 打包前清除输出目录
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
        process.env.NODE_ENV === 'production'
          ? JSON.stringify('production')
          : JSON.stringify('development')
    }),
    new CopyPlugin({
      patterns:[
        {
          from:path.join(__dirname,'../src/assets'),
          to:path.join(__dirname,'../dist/assets')
        }
      ]
    })
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
}

module.exports = webpackConfig

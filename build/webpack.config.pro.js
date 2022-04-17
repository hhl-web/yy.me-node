const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const TerserPlugin = require('terser-webpack-plugin');

const webpackConfig = merge(baseConfig, {
  mode: 'production', // 生产模式
  stats: {
    children: false, // webpack打包时子模块信息设置不显示
    warnings: false, // 警告不显示
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warning: true,
          compress: {
            warnings: false,
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true,
        },
        parallel: true,
        sourceMap: false,
      }),
    ],
    // splitChunks 用来避免模块之间重复的依赖关系
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true,
        },
      },
    },
  },
});

module.exports = webpackConfig;

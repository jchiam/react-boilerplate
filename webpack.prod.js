const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name]-[chunkhash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader', 'import-glob-loader']
        })
      }
    ]
  },
  optimization: {
    noEmitOnErrors: false,
    splitChunks: {
      cacheGroups: {
        react: {
          name: 'react',
          test: /[\\/]node_modules[\\/]react|redux|prop-types[\\/]/,
          chunks: 'all',
          priority: 10,
          enforce: true
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 0,
          enforce: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      chunks: ['main', 'react', 'vendor']
    }),
    new ExtractTextPlugin({
      filename: 'style-[chunkhash].css',
      allChunks: false
    }),
    new CleanWebpackPlugin(['dist'])
    // new BundleAnalyzerPlugin()
  ]
});

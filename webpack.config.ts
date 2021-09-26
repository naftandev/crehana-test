import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const config: Configuration = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: '[contenthash][ext][query]'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/statics/[contenthash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  }
}

export default config

import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

  return [
    new HtmlWebpackPlugin({ // позволяет вставлять имя скрипта в html (1)
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      // будут отдельные чанки, которые будут асинхронно подгружаться
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ]
}
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  // Если не используем typescript, то нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // лоадеры выполняются в обратном порядке sass -> css -> style
      // Creates `style` nodes from JS strings
      // "style-loader", - вместо него добавляем плагин ниже
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      // "css-loader", - чтобы передать с опциями, нужно передавать объект
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // auto: /\.module\./, // тоже самое регуляркой
            // localIdentName: isDev ? '[path].[name]__[local]--[hash:base64:5]' : ['hash:base64:8']
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : '[hash:base64:8]',
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return [ // здесь описываем loader - как обрабатывать файлы кроме js
    typescriptLoader,
    cssLoader,
  ]
}
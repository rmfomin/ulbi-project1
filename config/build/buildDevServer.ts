import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    // (3) будем передавать из опций, чтобы задавать снаружи
    port: options.port,
    open: false,
    // При перезагрузке страницы "site/about" - роутер терял эту страницу. Настройка исправляет это
    historyApiFallback: true,
  }
}
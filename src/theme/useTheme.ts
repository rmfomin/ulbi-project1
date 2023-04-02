// Логика по получению темы из контекста и ее переключению - выносим в отдельный хук
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  // с помощью хука можем получить до сделанного контекста доступ
  // Шаг 4 - достаем контекст. Пишем функцию по переключению темы и возвращаем тему и функцию.
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  };

  return {theme, toggleTheme}
}
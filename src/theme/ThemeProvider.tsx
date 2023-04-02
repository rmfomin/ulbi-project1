import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

// провайдер нужен для того, чтобы иметь глобальный доступ с любого компонента к темам
// Шаг 2 - обернуть в провайдер нужный компонент. Здесь делаем такой оборачивающий компонент.
// Шаг 3 - обернуть весь App в провайдер
const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  // любые обьекты/массивы, которые куда-то передаются пропсом лучше мемоизировать.
  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme])
  // theme может меняться и нам надо на это реагировать

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
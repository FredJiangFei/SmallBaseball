import React, { useState } from 'react';
import { THEMES } from '../constants';

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

const initialState: IThemeContext = {
  theme: THEMES.DEFAULT,
  setTheme: () => {},
};

const ThemeContext = React.createContext<IThemeContext>(initialState);

type Props = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>(THEMES.DEFAULT);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };

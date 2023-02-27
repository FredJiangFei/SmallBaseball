import React, { useState } from "react";
import { THEMES } from "../constants";

const initialState = {
  theme: THEMES.DEFAULT,
  setTheme: (theme: string) => {  },
};
const ThemeContext = React.createContext(initialState);

type ThemeProviderProps = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const initialState = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : THEMES.DEFAULT;
  };

  const [theme, _setTheme] = useState<string>(initialState());

  const setTheme = (theme: string) => {
    localStorage.setItem("theme", JSON.stringify(theme));
    _setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };

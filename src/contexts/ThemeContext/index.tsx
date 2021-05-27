import React, { createContext, useState, useEffect, useCallback } from "react";
import { ThemeProvider as ThemeProviderMUI, createMuiTheme, responsiveFontSizes, Paper, useMediaQuery } from "@material-ui/core";

interface Theme {
  theme: "dark" | "light" | "auto";
}

interface ThemeContextValues {
  changeTheme: (newTheme: Theme['theme']) => void;
  changeFontSize: (novoTamanho: number) => void;
  getNextTheme: () => Theme['theme'];
  theme: Theme['theme'];
  fontSize: number;
}

const ThemeContext = createContext<ThemeContextValues>({} as ThemeContextValues);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme['theme']>("auto");
  const [fontSize, setFontSize] = useState<number>(14);

  const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");

  const changeTheme = (newTheme: Theme['theme']) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  function changeFontSize(newSize: number) {
    if (newSize >= 10 && newSize <= 30) {
      setFontSize(newSize);
      localStorage.setItem("fontSize", JSON.stringify(newSize));
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme as Theme['theme']);
    }
    const fontSize = localStorage.getItem("fontSize");
    if (fontSize) {
      setFontSize(Number(fontSize));
    }
  }, []);

  const getTheme = useCallback(() => {
    switch (theme) {
      case "auto": {
        return prefersDarkTheme ? "dark" : "light";
      }
      case "dark": {
        return "dark"
      }
      case "light": {
        return "light"
      }
    }
  }, [prefersDarkTheme, theme]);

  const getNextTheme = useCallback((): Theme['theme'] => {
    switch (theme) {
      case "auto": {
        return "dark"
      }
      case "dark": {
        return "light"
      }
      case "light": {
        return "auto"
      }
    }
  }, [theme]);

  const appTheme = createMuiTheme({
    palette: {
      type: getTheme(),
    },
    overrides: {
      MuiPaper: {
        root: {
          transition: '0.3s'
        }
      }
    }
  });

  return (
    <ThemeContext.Provider value={{ changeTheme, changeFontSize, theme, fontSize, getNextTheme }}>
      <ThemeProviderMUI theme={responsiveFontSizes(appTheme)}>
        {children}
      </ThemeProviderMUI>
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider as ThemeProviderMUI, createMuiTheme, responsiveFontSizes, Paper } from "@material-ui/core";

interface ThemeContextValues {
  changeTheme: () => void,
  changeFontSize: (novoTamanho: number) => void,
  dark: boolean,
  fontSize: number,
}

const ThemeContext = createContext<ThemeContextValues>({} as ThemeContextValues);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<number>(14);

  const changeTheme = () => {
    if (dark) {
      setDark(false);
      localStorage.setItem("dark", JSON.stringify(false));
    }
    else {
      setDark(true);
      localStorage.setItem("dark", JSON.stringify(true));
    }
  }

  function changeFontSize(newSize: number) {
    if (newSize >= 10 && newSize <= 30) {
      setFontSize(newSize);
      localStorage.setItem("fontSize", JSON.stringify(newSize));
    }
  }

  useEffect(() => {
    const dark = localStorage.getItem("dark");
    console.log(dark)
    if (dark) {
      setDark(JSON.parse(dark));
    }
    const fontSize = localStorage.getItem("fontSize");
    if (fontSize) {
      setFontSize(Number(fontSize));
    }
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
    
  });

  return (
    <ThemeContext.Provider value={{ changeTheme, changeFontSize, dark, fontSize }}>
      <ThemeProviderMUI theme={responsiveFontSizes(theme)}>
        <Paper square>
          {children}
        </Paper>
      </ThemeProviderMUI>
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
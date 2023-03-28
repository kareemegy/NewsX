import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState("light");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // toggle theme and add types to it
  const toggleTheme = () => {
    if (isDarkTheme) {
      setTheme("light");
      setIsDarkTheme(!isDarkTheme);
    } else {
      setTheme("dark");
      setIsDarkTheme(!isDarkTheme);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

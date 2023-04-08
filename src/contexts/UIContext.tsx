import React, { useContext, useState } from "react";

export const UIContext = React.createContext({
  isMenuShrunk: false,
  toggleMenu: () => {},
  isSidebarOpen: false,
  setIsSidebarOpen: (b: boolean) => {},
  theme: "light",
  toggleTheme: () => {},
});

interface IProps {
  children: React.ReactNode;
}

export const UIProvider = ({ children }: IProps) => {
  const [isMenuShrunk, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuShrunk);
  };
  return (
    <UIContext.Provider
      value={{
        isMenuShrunk,
        toggleMenu,
        isSidebarOpen,
        setIsSidebarOpen,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);

import React, { useContext, useState } from "react";

export const UIContext = React.createContext({
  isMenuShrunk: false,
  toggleMenu: () => {},
  isSidebarOpen: false,
  setIsSidebarOpen: (b: boolean) => {},
  theme: "dark",
  toggleTheme: () => {},
  isOverlayOpen: false,
  isModalOpen: false,
  modalContent: null,
  openModal: (content: any) => {},
  closeModal: () => {},
});

interface IProps {
  children: React.ReactNode;
}

export const UIProvider = ({ children }: IProps) => {
  const [isMenuShrunk, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const openModal = (content: any) => {
    setModalContent(content);
    setIsModalOpen(true);
    setIsOverlayOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsOverlayOpen(false);
  };
  const [theme, setTheme] = useState("dark");
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
        isOverlayOpen,
        isModalOpen,
        modalContent,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);

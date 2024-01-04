import { createContext, useContext, useState } from "react";

const DarkMode = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};

export const globalDarkMode = () => {
  return useContext(DarkMode);
};

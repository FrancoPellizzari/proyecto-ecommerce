import React, { createContext, useState } from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState("light");

  const toggleTheme = () => {
    setDarkMode((prevMode) => (prevMode) === "light" ? "dark": "light");
  };

  return(
    <ThemeContext.Provider value = {{darkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );


};










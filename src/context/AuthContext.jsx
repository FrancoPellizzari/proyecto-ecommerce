import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto
export const AuthContext = createContext();

// Creamos un componente provider para envolver nuestra aplicación y proporcionar el contexto
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Por defecto, el usuario no está autenticado
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if(storedUser){
    setUserData(JSON.parse(storedUser));
    setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = ({name, email}) => {
    setIsLoggedIn(true);
    const userDataObj = {name, email};
    setUserData(userDataObj);
    localStorage.setItem("userData", JSON.stringify(userDataObj))
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({});
    localStorage.removeItem("userData");
  };

  const authContextValue = {
    isLoggedIn,
    userData,
    handleLogin,
    handleLogout,
  };
  

  

  return (
    <AuthContext.Provider value={{ authContextValue }}>
      {children}
    </AuthContext.Provider>
  );
};

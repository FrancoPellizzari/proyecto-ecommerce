import React, { useContext } from "react";
import HeaderNavbar from "../HeaderNavBar/HeaderNavbar";
import {ThemeContext} from '../../context/ThemeContext'

import { Link } from "react-router-dom";

import './Header.css';




function Header({ filterText, onFilterTextChange }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext)


  return (
    <nav className={`navbar ${darkMode === 'dark' ? 'dark' : 'light'}`}>
      <HeaderNavbar
        filterText={filterText}
        onFilterTextChange={onFilterTextChange}
      />
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        
      </ul>
      <button onClick={toggleTheme}>
        Cambiar Tema
      </button>


    </nav>
  );
}

export default Header;


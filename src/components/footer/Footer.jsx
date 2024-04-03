// Footer.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode === 'dark' ? 'dark' : 'light'}`}>
      
      <div className="content">
        <p>This is the footer.</p>
        <button onClick={toggleTheme}>Toggle Dark Mode</button>
      </div>
    </footer>
  );
};

export default Footer;

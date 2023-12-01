import React, { useState, useEffect } from 'react';
import '../index.css'
import '../CSS/ThemeToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false); // Set initial state to light theme

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    }
  }, [isDark]);

  const handleOnChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="theme-switch">
      <label className="switch">
        <input type="checkbox" checked={isDark} onChange={handleOnChange} />
        <span className="slider round">
          <FontAwesomeIcon icon={faSun} className={`sun-icon ${isDark ? 'icon-hidden' : ''}`} />
          <FontAwesomeIcon icon={faMoon} className={`moon-icon ${isDark ? '' : 'icon-hidden'}`} />
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
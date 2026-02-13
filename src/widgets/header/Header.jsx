import './Header.css';
import { useEffect, useState } from "react";
import siteIcon from '../../assets/siteIcon.svg';
import brightnessIcon from '../../assets/brightness.svg';
import darknessIcon from '../../assets/darkness.svg';

function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={siteIcon} alt="Logo" className="site-icon" />
        <h1 className="site-name">Character Counter</h1>
      </div>
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        <img
          src={isDark ? brightnessIcon : darknessIcon}
          alt={isDark ? 'Light Mode' : 'Dark Mode'}
          className="theme-icon"
        />
      </button>
    </header>
  );
}

export default Header;

import './Header.css';
import { useEffect } from "react";

function Header(){
    useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  const toggleLightMode = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  };
    return(
        <div className="header">
           <a href="#"><img src="/siteIcon.svg" alt="" className='site-icon' /></a>
            <a href='#'><h1 className='site-name text-black dark:text-white' >Character Counter</h1></a>
            <a href="lightMode" id="toggle-theme" className='change-bc-to-light bg-black'
                     onClick={toggleLightMode} 
        >
            <img src='/brightness.svg' alt="" className="change-bc-icon" /></a>

            <a href="darkMode" id="toggle-theme" className='change-bc-to-dark bg-black'
                    onClick={toggleDarkMode}
        >
            <img src='/darkness.svg' alt="" className="change-bc-icon" /></a>
        </div>
    );    
}

export default Header;
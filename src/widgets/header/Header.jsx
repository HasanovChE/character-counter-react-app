import './Header.css';
//import { useEffect } from "react";

function Header(){

    return(
        <div className="header">
           <a href="#"><img src="/siteIcon.svg" alt="" className='site-icon' /></a>
            <a href='#'><h1 className='site-name text-black dark:text-white' >Character Counter</h1></a>
            <a href="lightMode" id="toggle-theme" className='change-bc-to-light bg-black dark:bg-white'><img src='/brightness.svg' alt="" className="change-bc-icon" /></a>
            <a href="darkMode" id="toggle-theme" className='change-bc-to-dark bg-black dark:bg-white'><img src='/darkness.svg' alt="" className="change-bc-icon" /></a>
        </div>
    );    
}

export default Header;
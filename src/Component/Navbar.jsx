import React, { useEffect, useState } from 'react'
import '../Component/Navbar.css'
import { CiLight } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { MdContactPage } from "react-icons/md";
import { ImBlogger } from "react-icons/im";
import { Link } from 'react-router-dom'
import { FaRegMoon } from "react-icons/fa";

export default function Navbar() {
  
  const [theme, setTheme] = useState("dark-theme");

 
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      
    } 
    else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <div className='sidebar'>
        <div className='mode' onClick={toggleTheme}>
        {theme === "light-theme" ? <FaRegMoon /> :   <CiLight />}
        </div>
        <ul>
          <li className='n-icon1'><Link to="/"><FaHome /></Link></li>
          <li className='n-icon2'><Link to="about"><IoPerson /></Link></li>
          <li className='n-icon3'><Link to="portfolio"><BiSolidShoppingBagAlt /></Link></li>
          <li className='n-icon4'><Link to="contact"><MdContactPage /></Link></li>
          <li className='n-icon5'><Link to="blog"><ImBlogger /></Link></li>
        </ul>
      </div>
       <div className='navbar'>
        <ul>
          <li className='n-icon11'><Link to="/"><FaHome /></Link></li>
          <li className='n-icon21'><Link to="about"><IoPerson /></Link></li>
          <li className='n-icon31'><Link to="portfolio"><BiSolidShoppingBagAlt /></Link></li>
          <li className='n-icon41'><Link to="contact"><MdContactPage /></Link></li>
          <li className='n-icon51'><Link to="blog"><ImBlogger /></Link></li>
        </ul>

      </div>
    </div>
  );
}

import React, {useState} from 'react'
import  "./Navbar.css"
import logo from "./../../Assets/logo.png"


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handle = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
      };
    
      const headerHandle = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
      };

    
      const logout=(e)=>{
        e.preventDefault();
      }


  return (
    <>
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <img src={logo} alt="" id="main" />
      <p className="logo" onClick={headerHandle}>CGPA<span> Master</span></p>
      <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <a href="#home" className="active" onClick={headerHandle}>CPGA Calculator</a>
        <a href="#about" onClick={handle}>SGPA Calculator</a>
        <a href="#services" onClick={handle}>Attendace Calculator</a>
        <a href="#portfolio" onClick={handle}>CGPA Estimator</a>
        <a href="#contact" onClick={handle}>Grade Predictor</a>
        <button className='login-btn' onClick={logout}>Guest</button>
      </nav>
    </header>
    
    </>
  )
}


export default Navbar;
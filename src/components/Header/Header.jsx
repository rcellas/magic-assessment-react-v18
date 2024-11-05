import { useState } from "react"
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
  const [isMenuOpen,setIsMenuOpen]=useState(false);

  const toggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <img className="logo" src={logo} alt="logo magic the gathering" />
      <button className="menu-btn" onClick={toggleMenu}>
          ☰
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><a href="#">Favoritos</a></li>
          <li><a href="#">Tipos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
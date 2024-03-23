import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar-container">
      <h1><Link to="/">Yummy in Tummy</Link></h1>
      <nav className={showMenu ? 'nav-active' : ''}>
        <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to="/" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
          <li><Link to="/catering" onClick={toggleMenu}>Catering</Link></li>
        </ul>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={showMenu ? 'line line1 active' : 'line line1'}></div>
          <div className={showMenu ? 'line line2 active' : 'line line2'}></div>
          <div className={showMenu ? 'line line3 active' : 'line line3'}></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

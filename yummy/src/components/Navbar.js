import React, { useEffect, useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import "./Navbar.css"
import { Navigate } from 'react-router-dom';
function Navbar(){

  function logout(){
    localStorage.removeItem('Authtoken');
    setIsAuthenticated(false);
  }
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('Authtoken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
    const [page, setPage] = useState('Home');
    function handleMenu(menupage){
        setPage(menupage);
    }
    if (isAuthenticated) {
      return (
        
        <div>
      <h1><Link to="/">Yummy in Tummy</Link></h1>
      <nav>
        <ul>
          <li ><Link onClick={handleMenu.bind(this,'Home')} className={page === 'Home' ? 'activePage' : ''} to="/">Home</Link></li>
          <li><Link onClick={handleMenu.bind(this,'Menu')} className={page === 'Menu' ? 'activePage' : ''} to="/menu">Menu</Link></li>
          <li><Link onClick={logout} className={page === 'Login' ? 'activePage' : ''} >Logout</Link></li>
          
        </ul>
      </nav>
      
    </div>
    
  );
    } else {
    return (
        
        <div className="navbar-container">
          <h1><Link to="/">Yummy in Tummy</Link></h1> 
          <nav>
            <ul>
                <li><Link onClick={handleMenu.bind(this,'Home')} className={page === 'Home' ? 'activePage' : ''} to="/">About</Link></li>
                <li><Link onClick={handleMenu.bind(this,'Menu')} className={page === 'Menu' ? 'activePage' : ''} to="/menu">Menu</Link></li>
                <li><Link onClick={handleMenu.bind(this,'Login')} className={page === 'Login' ? 'activePage' : ''} to="/login">Login</Link></li>
                <li><Link onClick={handleMenu.bind(this,'Register')} className={page === 'Register' ? 'activePage' : ''} to="/register">Register</Link></li>
            </ul>
          </nav>
        </div>
        
      );
    }
}

export default Navbar;
import React from 'react'

function NavBar({ onNavClick }) {
  return (
    <nav className="navbar">
      <button onClick={() => onNavClick("Home")}>Home</button>
      <button onClick={() => onNavClick("About")}>About Us</button>
      <button onClick={() => onNavClick("Contact")}>Contact Us</button>
    </nav>
  );
}

export default NavBar;
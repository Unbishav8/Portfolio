import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      {menuOpen && (
        <ul className="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
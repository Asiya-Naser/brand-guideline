import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // if using external CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/brandwork">Brand Work</Link>
        </li>
        <li>
          <Link to="/colorpalette">Color Palette</Link>
        </li>
        <li>
          <Link to="/typography">Typography</Link>
        </li>
        <li>
          <Link to="/logoversion">Logo Version</Link>
        </li>{" "}
        {/* NEW */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

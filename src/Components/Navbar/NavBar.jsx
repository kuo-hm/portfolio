import React, { useState } from "react";
import "./Navbar.css";
const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  return (
    <nav className="NavbarItems">
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/" className="nav-links">
            About Me
          </a>
        </li>
        <li>
          <a href="/" className="nav-links">
          My Skills
          </a>
        </li>
        <li>
          <a href="/" className="nav-links">
          My Projects
          </a>
        </li>
        <li>
          <a href="/" className="nav-links">
           Contact Me!
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

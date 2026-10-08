
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/#home" className="logo">
        Prince | Front-End Developer
      </a>

      <div className={`nav-links ${open ? "mobile-open" : ""}`}>
        <a href="/#about" onClick={() => setOpen(false)}>
          About
        </a>

        <a href="/#skills" onClick={() => setOpen(false)}>
          Skills
        </a>

        <a href="/#projects" onClick={() => setOpen(false)}>
          Projects
        </a>

        <a href="/#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
      >
        {open ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;


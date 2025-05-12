import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-container">
            <div className="blu-box">BLU</div>
            <div className="dammar-text">DAMMAR</div>
          </div>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          {/* <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>Gallery</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>Contact</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
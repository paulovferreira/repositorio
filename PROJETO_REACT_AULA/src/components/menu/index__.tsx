import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          teste
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="menu-items">
          <li><Link to="/">Item 1</Link></li>
          <li><Link to="/item2">Item 2</Link></li>
          <li><Link to="/item3">Item 3</Link></li>
          <li><Link to="/item4">Item 4</Link></li>
          <li><Link to="/item5">Item 5</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-links">
        <a href="#">Gmail</a>
        <a href="#">Imágenes</a>
        <a href="#"><img src="/src/assets/apps.png" alt="apps" id="appIcon"/></a>
      </div>
      <div className="signin-button">
        <button className="signin">Iniciar sesión</button>
      </div>
    </header>
  );
}

export default Navbar;
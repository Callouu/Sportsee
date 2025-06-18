import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.svg";

/**
 * Render the Header with a logo and a navbar
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Header() {
  return (
    <header className="nav-wrapper">
      <Link to="/">
      <img src={logo} alt="" className="nav-logo vertical-center" />
      </Link>
      <nav className="nav vertical-center">
        <Link to="/">
          <p>Accueil</p>
        </Link>

        <Link to="/user/12">
          <p>Profil</p>
        </Link>

        <Link to="/settings">
          <p>Réglage</p>
        </Link>

        <Link to="/community">
          <p>Communauté</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

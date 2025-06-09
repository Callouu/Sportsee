import React from 'react'
import { Link } from 'react-router'
import logo from '../../assets/logo.svg'


/**
 * Render the Header with a logo and a navbar
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Header() {

	return (

		<header>

			<div className="header__">
				<div className="header__logo">
					<img src={logo} alt="" />
				</div>
				<h1 className="header__title">Sportsee</h1>
			</div>

			<Link to="/" >
				<p>Accueil</p>
			</Link>

			<Link to="/user/12" >
				<p>Profil</p>
			</Link>

			<Link to="/settings" >
				<p>Réglage</p>
			</Link>

			<Link to="/community" >
				<p>Communauté</p>
			</Link>

		</header>

	)
}

export default Header;
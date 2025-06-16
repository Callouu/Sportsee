import React from 'react'
import { Link } from "react-router"

function Settings() {
  return (
    <section className="comingSoon">
					<div className="comingSoon__container">
						<p>Cette page arrive très vite !</p>
					</div>
			<Link to="/" >
				<p  className="comingSoon__homeLink">Retourner sur la page d'accueil</p>
			</Link>
		</section>
  )
}

export default Settings
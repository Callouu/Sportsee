import React from 'react'
import {Link} from "react-router"

/**
 * @component
 * @description Component Error who appears when the datas are fetched but an error is occured xxx
 */
function Error() {
	return (
		<section className="error500">
				<>
					<p className="error500__number">500</p>
					<div className="error500__description">
						<p>Une erreur est survenue dans la récupération des données </p>
					</div>
				</>
			<Link to="/" >
				<p  className="error500__homeLink">Retourner sur la page d'accueil</p>
			</Link>
		</section>
	)
}

export default Error;
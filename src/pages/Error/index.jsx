import React from 'react'
import {Link} from "react-router"

/**
 * @component
 * @description Component Error who appears when the datas are fetched but an error is occured xxx
 */
function Error() {
	return (
		<section className="error404">
				<>
					<p className="error404__number">404</p>
					<div className="error404__phrase">
						<p>Oups! Une erreur... 😭 </p>
					</div>
				</>
			<Link to="/" >
				<p  className="error404__homeLink">Retourner sur la page d'accueil</p>
			</Link>
		</section>
	)
}

Error.propTypes = {
	
}

export default Error;
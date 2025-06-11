import React from 'react'
/**
 * Render a div (card) containing an image and text
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Card({ userKeyData, unit, subtitle, className, logo }) {
	return (
		<div className="card ">
			<div className={'card-icon-wrapper ' + className}>
				<img src={logo} alt="" className="card-icon center" />
			</div>
			<div className="card-data-wrapper">
				<p className="card-title">
					{userKeyData.toLocaleString('en-US')}
					{unit}
				</p>
				<p className="card-subtitle">{subtitle}</p>
			</div>
		</div>
	)
}

export default Card
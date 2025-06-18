import React from 'react'
/**
 * Card component that displays an icon, a value with its unit, and a subtitle.
 *
 * @component
 * @category Components
 * @param {Object} props - Component props
 * @param {number|string} props.userKeyData - The value to display in the card
 * @param {string} props.unit - The unit to display next to the value
 * @param {string} props.subtitle - The subtitle text for the card
 * @param {string} props.className - Additional class name(s) for styling the icon wrapper
 * @param {string} props.logo - The image source for the icon
 * @returns  { React.Component } The rendered Card component
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
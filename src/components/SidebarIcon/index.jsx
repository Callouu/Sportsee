import React from 'react'

/**
 * Render a button with an image
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function SidebarIcon({ logo }) {
	return (
		<button className="sidebar-icon">
			<img src={logo} alt="" className="sidebar-icon-logo" />
		</button>
	)
}

export default SidebarIcon
import SidebarIcon from '../SidebarIcon'
import yoga from '../../assets/yoga.svg'
import swimming from '../../assets/swimming.svg'
import biking from '../../assets/biking.svg'
import haltere from '../../assets/haltere.svg'

/**
 * Render the sidebar with buttons and copyright
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="sidebar-div">
				<SidebarIcon logo={yoga} />
				<SidebarIcon logo={swimming} />
				<SidebarIcon logo={biking} />
				<SidebarIcon logo={haltere} />
			</div>
			<p className="sidebar-text">Copyright, SportSee 2020</p>
		</aside>
	)
}

export default Sidebar
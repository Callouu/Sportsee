import React from 'react'

/**
 * Render a div (charts-card) containing the charts
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function ChartCard({ className, content }) {
	return <div className={'charts-card ' + className}>{content}</div>
}

export default ChartCard
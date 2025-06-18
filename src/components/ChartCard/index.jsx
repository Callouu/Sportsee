import React from 'react'

/**
 * Render a div (charts-card) containing the charts
 *
 * @category Components
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.className - Additional class name(s) for styling the card.
 * @param {JSX.Element} props.content - The chart content to display inside the card.
 * @returns { React.Component } A React component
 */
function ChartCard({ className, content }) {
	return <div className={'charts-card ' + className}>{content}</div>
}

export default ChartCard
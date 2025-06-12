import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
	PolarRadiusAxis,
	Text,
} from 'recharts'

/**
 * Render a RadarChart using Recharts
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function ChartPerformance({ data }) {
	/**
	 * Function to render the labels of the chart in a Text component
	 *
	 * @param { Object } payload - The payload of the labels
	 * @param { Number } x - The x position of the label
	 * @param { Number } y - The y position of the label
	 * @param { Number } cx - The x position of the center of the label
	 * @param { Number } cy - The y position of the center of the label
	 * @param { Object } rest - The rest of the props of the label
	 * @returns A function that returns a Text component
	 */

	// Récupère le tableau de données, que ce soit data.data ou data
    const perfData = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
    const kind = data?.kind || {};

    if (!perfData.length) return null; // ou un loader

	const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
    const formatLabel = (value) => {
        if (value === 'Energy') return 'Energie'
        if (value === 'Strength') return 'Force'
        if (value === 'Speed') return 'Vitesse'
        if (value === 'Intensity') return 'Intensité'
        return value
    }

    const label = kind[payload.value]
        ? formatLabel(
            kind[payload.value].charAt(0).toUpperCase() +
            kind[payload.value].slice(1)
        )
        : "";

    return (
        <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 10}
            x={x + (x - cx) / 100}
            fill="#FFFFFF"
            fontSize="0.75rem"
        >
            {label}
        </Text>
    )
}

	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius={90} data={[...perfData].reverse()}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="kind"
						tick={(props) => renderPolarAngleAxis(props)}
					/>
					<PolarRadiusAxis
						tickCount={6}
						tick={false}
						axisLine={false}
					/>
					<Radar
						dataKey="value"
						stroke="#FF0101"
						fill="#FF0101"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</>
	)
}


export default ChartPerformance
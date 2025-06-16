import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";


/**
 * Format the box who appears on hover on the Bar Chart
 * @param  {} payload datas we need to take to show informations on the tooltip
 */

const CustomizedTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-tooltip-radar">
        <h1 className="desc">{payload[0].value}</h1>
      </div>
    );
  }
  return null;
};

/**
 * Return the label associated with the performance type index
 * @function
 * @param {number} number - performance type index (1 to 6)
 * @returns {string|undefined} associated label or undefined if not found
 */
const formatPolarAngleAxis = (number) => {
  const labels = new Array(6);
  labels[1] = "Cardio";
  labels[2] = "Energie";
  labels[3] = "Endurance";
  labels[4] = "Force";
  labels[5] = "Vitesse";
  labels[6] = "Intensité";
  return labels[number];
};

/**
 * Render a RadarChart using Recharts
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function ChartPerformance({ data }) {
  // Récupère le tableau de données
  const kind = data?.kind || {};
  const perfData = (
    Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : []
  ).map((item) => ({
    ...item,
    label: kind[item.kind]
      ? kind[item.kind].charAt(0).toUpperCase() + kind[item.kind].slice(1)
      : String(item.kind),
  }));

  console.log(perfData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} data={[...perfData].reverse()}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="label"
          tickFormatter={formatPolarAngleAxis}
          dy={3}
          stroke="white"
          tick={{ fontSize: "0.75rem" }}
          tickSize={10}
          tickLine={false}
        />
        <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
        <Tooltip content={<CustomizedTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default ChartPerformance;

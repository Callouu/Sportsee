import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

/**
 * Custom tooltip for the LineChart.
 * Displays the session length in minutes when hovering over a point.
 *
 * @function
 * @param {Object} props - Tooltip properties provided by Recharts.
 * @param {boolean} props.active - Whether the tooltip is active.
 * @param {Array} props.payload - Data of the hovered point.
 * @returns {JSX.Element|null} The tooltip component or null if inactive.
 */
const CustomizedToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p>{payload[0].value + " min"}</p>
      </div>
    );
  }
  return null;
};

/**
 * Custom cursor for the LineChart.
 * Renders a background rectangle when hovering over the chart.
 *
 * @function
 * @param {Object} props - Cursor properties provided by Recharts.
 * @param {Array} props.points - Cursor coordinates.
 * @param {number} props.height - Height of the chart.
 * @param {number} props.width - Width of the rectangle.
 * @returns {JSX.Element} The background rectangle under the cursor.
 */
const CustomCursor = (props) => {
  const { points, height, width } = props;
  const { x } = points[0];
  return (
    <Rectangle
      fill="rgba(0,0,0,0.1)"
      x={x}
      y={0}
      width={width}
      height={height + 400}
    />
  );
};

/**
 * Render a LineChart using Recharts
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function SessionChart({ data }) {
  const formatLabel = (value) => {
    if (value === 1) return "L";
    if (value === 2) return "M";
    if (value === 3) return "M";
    if (value === 4) return "J";
    if (value === 5) return "V";
    if (value === 6) return "S";
    if (value === 7) return "D";
    return value;
  };

  return (
    <>
      <h3 className="chartaverage-sessions-title">
        Durée moyenne des <br />
        sessions
      </h3>
      <ResponsiveContainer width="100%" height="100%" className={"center"}>
        <LineChart data={data} margin={{ top: 30, right: 10, left: 10, bottom: 30 }}>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={{
              stroke: "#FFF",
              strokeWidth: 4,
              r: 2,
            }}
            dot={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "rgba(255,255,255,0.5)",
              fontSize: "0.75rem",
            }}
            tickFormatter={formatLabel}
            tickMargin={20}
          />
          <Tooltip content={<CustomizedToolTip />} cursor={<CustomCursor />} />
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default SessionChart;

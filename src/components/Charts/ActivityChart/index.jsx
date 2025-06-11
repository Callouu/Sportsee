import React, { useState } from "react";
import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
} from "recharts";

/**
 * Format the box who appears on hover on the Bar Chart
 * @param  {} active true if the box appears
 * @param  {} payload datas we need to take to show informations on the tooltip
 */
const CustomizedToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="desc">{payload[0].value + "kg"}</p>
        <p className="desc">{payload[1].value + "Kcal"}</p>
      </div>
    );
  }
  return null;
};

/**
 * @component
 * @category Graph
 * @memberOf Dashboard
 * @description Component who show evolution on a few days of the weight and the used calories of the user, on a bar chart
 * @param  {object} props Activities datas of the user
 */
function ActivityChart(props) {
  // Take the datas we need on the props
  let activityDatas = props.data.sessions;
  // eslint-disable-next-line no-unused-vars
  const [activityData, setUserData] = useState(activityDatas);

  // Format the information we need to show on the bottom for each chart
  const formatXAxis = (tickItem, i) => {
    return i + 1;
  };

  return (
    <>
      <h3 className="chartactivity-title">Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activityData} barSize={7} barGap={8}>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
            tickFormatter={formatXAxis}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickMargin={30}
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin-2", "dataMax+1"]}
            tickCount={3}
          />
          <YAxis hide yAxisId="calories" />
          <Tooltip
            content={<CustomizedToolTip />}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="10"
            height={80}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default ActivityChart;

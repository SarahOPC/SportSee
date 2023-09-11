import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useState } from 'react';

const CustomLegend = (props) => {
  const whiteColor = "#FFFFFF";
  const legendStyle = {
    color: whiteColor,
    textAlign: 'left',
    opacity: '0.6',
    fontSize: '1.3em',
    marginLeft: '4em',
  };

  return (
    <div>
      <div style={legendStyle}>Durée moyenne des sessions</div>
    </div>
  );
};

const tooltipClassicStyle = {
  backgroundColor: '#FFFFFF',
  padding: '0.5em',
  fontWeight: '600'
};

const dayOfWeek = ['L','M','M','J','V','S','D'];

const CustomTooltip = ({ active, payload }) => {
  if(active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div style={tooltipClassicStyle}>{`${data.sessionLength} min`}</div>
    )
  }
  return null;
}

const RenderLineChart = ({data}) => { // Accept data prop as a parameter
  const [hoveredDay, setHoveredDay] = useState(null);

  const handleMouseEnter = (day) => {
    setHoveredDay(day);
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      style={{ 
        position: 'relative',
        width: 'fit-content'
      }}>
    <div
      style={{
        borderRadius: '0.3em',
        overflow: 'hidden', // Ensure that the border radius is applied correctly
      }} >
      <LineChart
        width={270}
        height={225}
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: -65,
          bottom: 15,
        }}
        borderRadius= '0.3em'
      >
      <defs>
        <linearGradient
          id='gradient'
          x1="0"
          y1="0"
          x2="100%"
          y2="0" >
          <stop offset="0%" stopColor='#BFBFBF' />
          <stop offset="100%" stopColor='#FFFFFF' />
        </linearGradient>
      </defs>
      <Legend
        content={CustomLegend}
        verticalAlign='top'
      />
      <rect
        width="100%"
        height="100%"
        fill="#FF0000"
      />
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tickFormatter={(value) => dayOfWeek[value - 1]}
        tick={{fill: '#FFFFFF', opacity: 0.6}}
        padding={{left: 10, right: 10}}
      />
      <YAxis
        axisLine={false}
        tick={null}
      />
      <Tooltip
        content={CustomTooltip}
        cursor={false}
      />
      {dayOfWeek.map((day, index) => (
        <rect
          key={index}
          x={`${25 + index * 10}%`}
          y={0}
          fill={hoveredDay === day ? 'rgba(0, 0, 0, 0.1)' : 'transparent'}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          pointerEvents="none" // Allow events to pass through
        />
      ))}
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="url(#gradient)"
        dot={false}
        strokeWidth={1.5}/>
    </LineChart>
    </div>
  </div>
  );
};

export default function SimpleLineChartFunction({ data }) {
    return <RenderLineChart data={data} />; // Pass the data prop to renderLineChart
}

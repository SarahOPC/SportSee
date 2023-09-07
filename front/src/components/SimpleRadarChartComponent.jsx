import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

const RenderRadarChart = ({ data }) => { //Accept data as a parameter

  const chartStyle = {
    backgroundColor: '#282D30',
    width: '258px',
    height: '275px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={chartStyle}>
      <RadarChart
        width={250}
        height={200}
        data={data.formattedDataWithKind}
        >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" fontSize='0.7em' fontWeight='700'/>
        <Radar
          dataKey="value"
          fill="#FF0101"
          fillOpacity={0.6}  
        />
      </RadarChart>
    </div>
    );
}

export default function SimpleRadarChartFunction({ data }) {
  return <RenderRadarChart data={data} /> // Pass the data prop to renderRadarChart
}

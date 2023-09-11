import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const RenderRadarChart = ({ data }) => { // Accept data as a parameter

  const kindInFrench = (kind) => {
    switch(kind) {
      case "intensity":
        return "Intensité";
      case "speed":
        return "Vitesse";
      case "strength":
        return "Force";
      case "endurance":
        return "Endurance"
      case "energy":
        return "Energie"
      case "cardio":
        return "Cardio";
      default:
        return kind;
    }
  };

  const desiredOrderForData = ["intensity", "speed", "strength", "endurance", "energy", "cardio"];

  const reorderedData = data.formattedDataWithKind.sort(
    (a, b) => desiredOrderForData.indexOf(a.kind) - desiredOrderForData.indexOf(b.kind)
  );

  const chartStyle = {
    backgroundColor: '#282D30',
    width: '270px',
    height: '225px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.3em',
  };

  return (
    <div style={chartStyle}>
      <ResponsiveContainer>
        <RadarChart
          width='100%'
          height={250}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          data={reorderedData}
          >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            fontSize='0.6em'
            fontWeight='700'
            tickFormatter={kindInFrench}/>
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.6}  
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
    );
}

export default function SimpleRadarChartFunction({ data }) {
  return <RenderRadarChart data={data} /> // Pass the data prop to renderRadarChart
}

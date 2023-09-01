import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const renderLineChart = (data) => ( // Accept data prop as a parameter
  <div width={400} height={350}>

    <LineChart
      width={258}
      height={263}
      data={data}
      margin={{
        top: 35,
        right: 30,
        left: 10,
        bottom: 15,
      }}
    >
      <rect width="100%" height="100%" fill="#FF0000" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} strokeWidth={1.5} />
    </LineChart>

  </div>
)

export default function SimpleLineChartFunction({ data }) {
    return renderLineChart(data); // Pass the data prop to renderLineChart
}
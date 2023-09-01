import { LineChart, Line, XAxis, /* YAxis, CartesianGrid, Tooltip, Legend, */ ResponsiveContainer } from 'recharts';

const renderLineChart = (data) => ( // Accept data prop as a parameter
  <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          /* margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} */
        >
          <XAxis dataKey="day" />
          {/* <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <Tooltip />
          <Legend /> */}
          <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
)

export default function SimpleLineChartFunction({ data }) {
    return renderLineChart(data); // Pass the data prop to renderLineChart
}
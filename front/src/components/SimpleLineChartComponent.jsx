import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SimpleLineChartFunction({ data }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sessionLength" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="sessionLength" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
}
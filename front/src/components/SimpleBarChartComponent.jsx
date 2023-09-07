import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const RenderBarChart = ({data}) => { // Accept data prop as a parameter

    return (
        <BarChart
            width={900}
            height={300}
            data={data}
        >
            <Legend />
            <CartesianGrid strokeDasharray="3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" />
            <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" />
        </BarChart>
    )
}

export default function SimpleBarChart({ data }) {
    return <RenderBarChart data={data} />; // Pass the data prop to renderBarChart
}

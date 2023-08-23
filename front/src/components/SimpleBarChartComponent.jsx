import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export default function SimpleBarChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
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
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" />
                <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" />
            </BarChart>
        </ResponsiveContainer>
    )
}
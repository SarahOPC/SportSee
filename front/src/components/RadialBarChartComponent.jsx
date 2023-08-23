import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default function RadialBarChartFunction({ data }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart innerRadius="10%" outerRadius="80%" data={data}>
                <RadialBar 
                    minAngle={15} 
                    label={{ fill: '#666', position: 'insideStart' }} 
                    background 
                    clockWise={true} 
                    dataKey="formattedScore" />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />  
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

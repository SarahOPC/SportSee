import { RadialBarChart, RadialBar } from 'recharts';

const RenderRadiaBarChart = ({ data }) => { // Accept data prop as a parameter
    
    const { formattedPercentage, formattedScore } = data[0];

    const chartData = [
        { name: 'formattedPercentage', value: formattedPercentage},
        { name: 'formattedScore', value: formattedScore},
    ];
    
    return (
        <div style={{ borderRadius: '0.3em' }}>
            <div style={{ textAlign: 'left', marginTop: '2em', marginLeft: '2em', fontWeight: '600' }}>Score</div>
            <RadialBarChart 
                width={258}
                height={275}
                innerRadius={20}
                outerRadius={140}
                startAngle={180} // from left
                endAngle={0} // to right
                data={chartData}
                barSize={10}
            >
                <RadialBar
                    dataKey="value"
                    fill='#FF0000'
                    background
                    clockWise
                />
            </RadialBarChart>
        </div>
    )
}

export default function RadialBarChartFunction({ data }) {
    return <RenderRadiaBarChart data={data} />; // Pass the data prop to renderRadialBarChart
}

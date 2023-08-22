// import { fetchUserData } from '../DataFetchingFile';
/* import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';

function Kpi() {
    const [userScore, setUserScore] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await fetchMockedUserData('main');
                const dataOfUserData = userData.data;
                const formattedScore = formatUserData(dataOfUserData);
                setUserScore(formattedScore);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();      
    }, []);

    if(!userScore) {
        return <div>Loading...</div>;
    }
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const chartData = [{ name: 'Score', value: userScore.formattedScore }];
    console.log(chartData);
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    return(
        <ResponsiveContainer width="100%" height="100%">

            <RadialBarChart innerRadius="10%" outerRadius="80%" data={chartData}>
                <RadialBar 
                    minAngle={15} 
                    label={{ fill: '#666', position: 'insideStart' }} 
                    background 
                    clockWise={true} 
                    dataKey="value" />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />  
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default Kpi; */


/* 
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

function Kpi() {
    const data = [
        { name: 'Score', value: 47 }
    ];

    return (
            <div style={{ textAlign: 'center' }}>
                <h1>Hello, Recharts!</h1>
                <RadialBarChart data={data}>
                    <RadialBar
                        minAngle={15}
                        label={{ fill: '#666', position: 'insideStart' }}
                        background
                        clockWise={true}
                        dataKey="value"
                    />
                    <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                    />
                    <Tooltip />
                </RadialBarChart>
            </div>
    );
}

export default Kpi;
 */
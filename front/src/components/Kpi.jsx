// import { fetchUserData } from '../DataFetchingFile';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
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
    
    const chartData = [{ formattedScore: userScore.formattedScore }];
    console.log(chartData[0].formattedScore);

    return(
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart  cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" startAngle={180} endAngle={0} data={chartData[0]}>
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
    );
}

export default Kpi;

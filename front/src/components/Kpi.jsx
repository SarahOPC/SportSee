import { fetchUserData } from '../DataFetchingFile';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const userId = 12;

function Kpi() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUserData(userId);
                setUserData(data);
            } catch(error) {
                console.error("Error while fetching data : ", error.message);
            }
        };
        fetchData();
    }, []);

    if(!userData) {
        return <div>Loading...</div>;
    }
    const userKpi = userData.todayScore;
    console.log(userKpi);
    const userKpiPercentage = userKpi*100;

    const data = [{ todayScore: userKpiPercentage }];
    console.log(data);

    return(
        <ResponsiveContainer>
            <RadialBarChart width={730} height={250} innerRadius="10%" outerRadius="80%" data={data} startAngle={180} endAngle={0}>
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='todayScore' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />  
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default Kpi;

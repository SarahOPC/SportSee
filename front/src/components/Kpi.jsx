import styled from 'styled-components';
import { fetchUserData } from '../DataFetchingFile';
import { RadialBar, Legend, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';

const RadialBarChart = styled.div`
    width: 100%;
    height: 100%;
`;

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
    const userKpiPercentage = userKpi*100;

    const data = [{ score: userKpiPercentage }];

    return(
        <div>
            <RadialBarChart width={730} height={250} data={data}>
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='score' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />  
            </RadialBarChart>
        </div>
    );
}

export default Kpi;

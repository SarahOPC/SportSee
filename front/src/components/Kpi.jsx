// import { fetchUserData } from '../DataFetchingFile';

import { useState, useEffect } from 'react';
import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';
import { LineChart, Line } from 'recharts';
import RadialBarChartFunction from './RadialBarChartComponent';
import styled from 'styled-components';

const KpiContainer = styled.div`
`;
const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 500, pv: 2200, amt: 2100},
    {name: 'Page C', uv: 100, pv: 1400, amt: 1400}
  ];

const renderLineChart = (
    <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
);

function Kpi() {
    const [userScore, setUserScore] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await fetchMockedUserData('main');
                const dataOfUserData = userData.data;
                const formattedScore = formatUserData(dataOfUserData, 'main');
                setUserScore(formattedScore.formattedScore);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();      
    }, []);

/* useEffect(() => {
        console.log(userScore);
    }, [userScore]); */


    if(!userScore) {
        return <div>Loading...</div>;
    }

    return(
        <KpiContainer>
            {renderLineChart}
            <RadialBarChartFunction data={ userScore } />
        </KpiContainer>
    );
}

export default Kpi;

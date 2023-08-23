// import { fetchUserData } from '../DataFetchingFile';

import { useState, useEffect } from 'react';
import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';
import { RadialBarChartFunction } from './RadialBarChart';

function Kpi() {
    const [userScore, setUserScore] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await fetchMockedUserData('main');
                const dataOfUserData = userData.data;
                const formattedScore = formatUserData(dataOfUserData, 'main');
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
        <RadialBarChartFunction data={ chartData } />
    );
}

export default Kpi;

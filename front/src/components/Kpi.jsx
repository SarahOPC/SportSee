// import { fetchUserData } from '../DataFetchingFile';

import { useState, useEffect } from 'react';
import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';
import RadialBarChartFunction from './RadialBarChartComponent';
import styled from 'styled-components';

const KpiContainer = styled.div`
`;

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

/* useEffect(() => {
        console.log(userScore);
    }, [userScore]);
*/

    if(!userScore) {
        return <div>Loading...</div>;
    }

    return(
        <KpiContainer>
            <RadialBarChartFunction data={ userScore } />
        </KpiContainer>
    );
}

export default Kpi;

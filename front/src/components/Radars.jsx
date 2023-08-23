import styled from 'styled-components';
import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';
import { useEffect, useState } from 'react';
import SimpleRadarChart from './SimpleRadarChartComponent';

const RadarContainer = styled.div`
`;

function Radar() {

    const [userPerformance, setUserPerformance] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await fetchMockedUserData('performance');
                const dataOfUserData = userData.data;
                const formattedSessionsPerformance = formatUserData(dataOfUserData, 'performance');
                setUserPerformance(formattedSessionsPerformance);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    /* useEffect(() => {
        console.log(userPerformance);
    }, [userSessionsPerformance]);
 */
    return(
        <RadarContainer>
            <SimpleRadarChart data={ userPerformance } />
        </RadarContainer>
    );
}

export default Radar;
import styled from 'styled-components';
import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';
import { useEffect, useState } from 'react';
import SimpleBarChart from './SimpleBarChartComponent';

const WeightContainer = styled.div`
`;

function Weight() {

    const [userSessions, setUserSessions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await fetchMockedUserData('activity');
                const dataOfUserData = userData.data;
                const formattedSessions = formatUserData(dataOfUserData, 'activity');
                setUserSessions(formattedSessions);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    /* useEffect(() => {
        console.log(userSessions);
    }, [userSessions]);
 */
    return(
        <WeightContainer>
            <SimpleBarChart data={ userSessions } />
        </WeightContainer>
    );
}

export default Weight;
import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';
import { useEffect, useState } from 'react';
import SimpleLineChart from './SimpleLineChartComponent';
import styled from 'styled-components';

const GoalsContainer = styled.div`
`;

function Goals() {

    const [userSessionsLength, setUserSessionsLength] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await fetchMockedUserData('average');
                const dataOfUserData = userData.data;
                const formattedSessionsLength = formatUserData(dataOfUserData, 'average');
                setUserSessionsLength(formattedSessionsLength);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    /* useEffect(() => {
        console.log(userSessionsLength);
    }, [userSessions]);
 */
    return(
        <GoalsContainer>
            <SimpleLineChart data={ userSessionsLength } />
        </GoalsContainer>
    );
}

export default Goals;
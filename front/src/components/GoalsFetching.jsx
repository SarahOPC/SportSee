import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';
import { useEffect, useState } from 'react';

export default function GoalsFetching() {

    const [userSessionsLength, setUserSessionsLength] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await fetchMockedUserData('average');
                const dataOfUserData = userData.data;
                const formattedSessionsLength = formatUserData(dataOfUserData, 'average');
                setUserSessionsLength(formattedSessionsLength.formattedSessionsLength);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log(userSessionsLength);
    }, [userSessionsLength]);

    return null;
}

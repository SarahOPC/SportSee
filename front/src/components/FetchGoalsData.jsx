import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';

export default async function fetchGoalsData() {
    try {
        const userData = await fetchMockedUserData('average');
        const dataOfUserData = userData.data;
        const formattedSessionsLength = formatUserData(dataOfUserData, 'average');
        return formattedSessionsLength.formattedSessionsLength;
    } catch(error) {
        throw error;
    }
}


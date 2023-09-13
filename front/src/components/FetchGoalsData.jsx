// import { fetchMockedUserData } from '../DataFetchingFile'; // For MockedData ------------
import { fetchUserData } from '../DataFetchingFile'; // For real data +++++++++++
import { formatUserData } from './DataModeling';

export default async function fetchGoalsData() {
    try {
        // const userData = await fetchMockedUserData('average'); // For MockedData ------------
        const userData = await fetchUserData(18, 'average-sessions'); // For real data +++++++++++
        // const dataOfUserData = userData.data; // For MockedData ------------
        // const formattedSessionsLength = formatUserData(dataOfUserData, 'average-sessions'); // For MockedData ------------
        const formattedSessionsLength = formatUserData(userData, 'average-sessions'); // For real data +++++++++++
        return formattedSessionsLength.formattedSessionsLength;
    } catch(error) {
        throw error;
    }
}

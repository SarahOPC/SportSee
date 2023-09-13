// import { fetchMockedUserData } from "../DataFetchingFile"; // For MockedData ------------
import { fetchUserData } from "../DataFetchingFile"; // For real data +++++++++++
import { formatUserData } from "./DataModeling";

export default async function fetchRadarsData() {
    try {
        // const userData = await fetchMockedUserData('performance'); // For MockedData ------------
        const userData = await fetchUserData(18, 'performance'); // For real data +++++++++++
        // const dataOfUserData = userData.data; // For MockedData ------------
        // const formattedSessionsPerformance = formatUserData(dataOfUserData, 'performance'); // For MockedData ------------
        const formattedSessionsPerformance = formatUserData(userData, 'performance'); // For real data +++++++++++
        return formattedSessionsPerformance;
    } catch(error) {
        throw error;
    }
}

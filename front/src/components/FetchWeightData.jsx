// import { fetchMockedUserData } from "../DataFetchingFile"; // For MockedData ------------
import { fetchUserData } from "../DataFetchingFile"; // For real data +++++++++++
import { formatUserData } from "./DataModeling";

export default async function fetchWeightData() {
    try {
        // const userData = await fetchMockedUserData('activity'); // For MockedData ------------
        const userData = await fetchUserData(18, 'activity'); // For real data +++++++++++
        // const dataOfUserData = userData.data; // For MockedData ------------
        // const formattedSessions = formatUserData(dataOfUserData, 'activity'); // For MockedData ------------
        const formattedSessions = formatUserData(userData, 'activity'); // For real data +++++++++++
        return formattedSessions.formattedSessions;
    } catch(error) {
        throw error;
    }
}
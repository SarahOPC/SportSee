import { fetchMockedUserData } from "../DataFetchingFile";
import { formatUserData } from "./DataModeling";

export default async function fetchRadarsData() {
    try {
        const userData = await fetchMockedUserData('performance');
        const dataOfUserData = userData.data;
        const formattedSessionsPerformance = formatUserData(dataOfUserData, 'performance');
        return formattedSessionsPerformance;
    } catch(error) {
        throw error;
    }
}

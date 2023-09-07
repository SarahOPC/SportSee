import { fetchMockedUserData } from "../DataFetchingFile";
import { formatUserData } from "./DataModeling";

export default async function fetchWeightData() {
    try {
        const userData = await fetchMockedUserData('activity');
        const dataOfUserData = userData.data;
        const formattedSessions = formatUserData(dataOfUserData, 'activity');
        return formattedSessions.formattedSessions;
    } catch(error) {
        throw error;
    }
}
// import { fetchMockedUserData } from "../DataFetchingFile"; // For MockedData ------------
import { fetchUserData } from "../DataFetchingFile"; // For real data +++++++++++
import { formatUserData } from "./DataModeling";

export default async function fetchKpiData() {
    try {
        // const userData = await fetchMockedUserData('main'); // For MockedData ------------
        const userData = await fetchUserData(18, 'main'); // For real data +++++++++++
        // const dataOfUserData = userData.data;  // For MockedData ------------
        // const formattedScore = formatUserData(dataOfUserData, 'main'); // For MockedData ------------
        const formattedScore = formatUserData(userData, 'main'); // For real data +++++++++++
        return formattedScore;
    } catch(error) {
        throw error;
    }
}

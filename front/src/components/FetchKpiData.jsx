import { fetchMockedUserData } from "../DataFetchingFile";
import { formatUserData } from "./DataModeling";

export default async function fetchKpiData() {
    try {
        const userData = await fetchMockedUserData('main');
        const dataOfUserData = userData.data;
        const formattedScore = formatUserData(dataOfUserData, 'main');
        return formattedScore.formattedScore;
    } catch(error) {
        throw error;
    }
}

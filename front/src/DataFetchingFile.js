// To add more cleaner code, clarity, organization, testing possibility, reusability and for separation of concern

import { mockedData } from './components/MockedData';

/* async function fetchUserData(userId, endpoint) {
    const url = `http://localhost:3000/user/${userId}${endpoint ? `/${endpoint}` : ''}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch(error) {
        throw new Error("Error fetching data : " + error.message);
    }
} */

async function fetchMockedUserData() {
    const dataToUse = mockedData;
    return dataToUse;
}

export default fetchMockedUserData;
// To add more cleaner code, clarity, organization, testing possibility, reusability and for separation of concern

import { MainMockedData, ActivityMockedData, AverageMockedData, PerformanceMockedData } from './components/MockedData';

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

export async function fetchMockedUserData(dataType) {
    switch(dataType) {
        case 'main':
            return { data: MainMockedData };
        case 'activity':
            return { data: ActivityMockedData };
        case 'average':
            return { data: AverageMockedData };
        case 'performance':
            return { data: PerformanceMockedData };
        default:
            throw new Error('Invalid data type');
    }
}

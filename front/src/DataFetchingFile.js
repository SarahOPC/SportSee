// To add more cleaner code, clarity, organization, testing possibility, reusability and for separation of concern

// import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../app/data.js'; // For MockedData ------------

// For real data ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export async function fetchUserData(userId, endpoint) {
    let url = `http://localhost:3000/user/${userId}${endpoint ? `/${endpoint}` : ''}`;
    if(endpoint === 'main') {
        url = `http://localhost:3000/user/${userId}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    }
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch(error) {
        throw new Error("Error fetching data : " + error.message);
    }
}

// For real data ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// For MockedData --------------------------------------------------------------------------------------------------------------

// import { MainMockedData, ActivityMockedData, AverageMockedData, PerformanceMockedData } from './components/MockedData';

/* export async function fetchMockedUserData(dataType) {
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
} */

// For MockedData --------------------------------------------------------------------------------------------------------------
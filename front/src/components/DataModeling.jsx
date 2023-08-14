// To transform API data into Javascropt objects easier to work with
// More easily manage data, manipulate it and display it in a user interface

/*
    Method :
    1 - Defining the data structure: identify the types of data received from the API and how it is organized (objects, arrays, etc)
    2 - Creating the modeling class: Create a class in which will be defined methods to format the data received from the API into something more user-friendly for the application
    3 - Implementing formatting methods: In the class, add methods that will take the raw data and convert it to objects or data structures more appropriate for the application
    (can include sorting, filtering, grouping, etc)
    4 - Use the class in the app: Whenever we get data from the API, we use the class's methods to format it before using it in the app
 */

class DataModel {
    constructor(mainData, activityData, averageData, performanceData) {
        this.mainData = mainData;
        this.activityData = activityData;
        this.averageData = averageData;
        this.performanceData = performanceData;
    }

    formatUserData() {
        return this.mainData.map((entry) => {
            return {
                id: entry.id,
                nom: `${entry.userInfos.firstName} ${entry.userInfos.lastName}`,
                age: entry.userInfos.age,
                todayScore: entry.todayScore,
            };
        });
    }

    formatActivityData() {
        return this.activityData.map((entry) => {
            return {
                userId: entry.userId,
                sessions: entry.sessions.map((sessions) => {
                    return {
                        day: sessions.day,
                        weight: sessions.kilogram,
                        calories: sessions.calories,
                    };
                }),
            };
        });
    }

    formatAverageData() {
        return this.averageData.map((entry) => {
            return {
                userId: entry.userId,
                sessions: entry.sessions.map((session) => {
                    return {
                        day:session.day,
                        sessionLength: session.sessionLength,
                    };
                }),
            };
        });
    }

    formatPerfomanceData() {
        return this.performanceData.map((entry) => {
            return {
                userId: entry.userId,
                data: entry.data.map((element) => {
                    return {
                        value: element.value,
                        type: entry.kind[element.kind],
                    };
                }),
            };
        });
    }
}

const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('../../../app/data');

const dataModel = new DataModel(
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
);

const formattedUserData = dataModel.formatUserData();
const formattedActivityData = dataModel.formatActivityData();
const formattedAverageData = dataModel.formatAverageData();
const formattedPerformanceData = dataModel.formatPerfomanceData();

console.log(formattedUserData);
console.log(formattedActivityData);
console.log(formattedAverageData);
console.log(formattedPerformanceData);

export default DataModel;
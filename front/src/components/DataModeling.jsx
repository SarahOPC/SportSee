// To transform API data into Javascropt objects easier to work with
// More easily manage data, manipulate it and display it in a user interface

export function formatUserData(userData, dataType) {
    if(dataType === 'main') {
        const { userInfos, todayScore, keyData } = userData[0];
        const formattedData = [
            {
                formattedFirstName: userInfos.firstName,
                formattedScore: todayScore * 100,
                formattedPercentage: 100,
                formattedCalories: keyData.calorieCount,
                formattedProteins: keyData.proteinCount,
                formattedCarbs: keyData.carbohydrateCount,
                formattedFats: keyData.lipidCount,
            },
        ];
        return formattedData;

    } else if(dataType === 'activity') {
        const { sessions } = userData[0];
        const formattedSessions = sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }));
        const formattedData = {
            formattedSessions: formattedSessions,
        };
        return formattedData;

    } else if(dataType === 'average') {
        const { sessions } = userData[0];
        const formattedSessionsLength = sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength,
        }));
        const formattedData = {
            formattedSessionsLength: formattedSessionsLength,
        };
        return formattedData;

    } else if(dataType === 'performance') {
        const { kind, data } = userData[0];
        const formattedDataWithKind = data.map(dataElement => ({
            value: dataElement.value,
            kind: kind[dataElement.kind], // Retrieve the kind type based on the value
        }));
        const formattedData = {
            formattedDataWithKind: formattedDataWithKind,
        };
        return formattedData;
    } else {
            throw new Error('Invalid data type');
    }        
}

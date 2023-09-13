// To transform API data into Javascropt objects easier to work with
// More easily manage data, manipulate it and display it in a user interface

export function formatUserData(userData, dataType) {
    if(dataType === 'main') {
        // const { userInfos, todayScore, keyData } = userData[0]; // For MockedData ------------
        const { userInfos, todayScore, keyData } = userData; // For real data +++++++++++
        const formattedData = [
            {
                formattedFirstName: userInfos.firstName,
                formattedScore: todayScore * 100,
                formattedPercentage: 100,
                formattedCalories: keyData.calorieCount.toLocaleString(),
                formattedProteins: keyData.proteinCount,
                formattedCarbs: keyData.carbohydrateCount,
                formattedFats: keyData.lipidCount,
            },
        ];
        return formattedData;

    } else if(dataType === 'activity') {
        //const { sessions } = userData[0]; // For MockedData ------------
        const { sessions } = userData; // For real data +++++++++++
        const formattedSessions = sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }));
        const formattedData = {
            formattedSessions: formattedSessions,
        };
        return formattedData;

    } else if(dataType === 'average-sessions') {
        // const { sessions } = userData[0]; // For MockedData ------------
        const { sessions } = userData; // For real data +++++++++++
        const formattedSessionsLength = sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength,
        }));
        const formattedData = {
            formattedSessionsLength: formattedSessionsLength,
        };
        return formattedData;

    } else if(dataType === 'performance') {
        // const { kind, data } = userData[0]; // For MockedData ------------
        const { kind, data } = userData; // For real data +++++++++++
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

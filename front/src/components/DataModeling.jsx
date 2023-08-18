// To transform API data into Javascropt objects easier to work with
// More easily manage data, manipulate it and display it in a user interface

export function formatUserData(userData) {
    const { userInfos, todayScore } = userData[0];
    const formattedData = {
        formattedFirstName: userInfos.firstName,
        formattedScore: todayScore,
    }
    return formattedData;
}

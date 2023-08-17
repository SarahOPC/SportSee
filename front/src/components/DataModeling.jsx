// To transform API data into Javascropt objects easier to work with
// More easily manage data, manipulate it and display it in a user interface

export function formatUserData(userData) {
    const { firstName, todayScore } = userData;
    const formattedData = {
        formattedFirstName: firstName,
        formattedScore: todayScore,
    }
    return formattedData;
}

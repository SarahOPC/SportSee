// To transform API data into Javascropt objects easier to work with
// More easily manage data, manipulate it and display it in a user interface

export function formatUserData(userData) {
    const { userInfos, todayScore, keyData } = userData[0];
    const formattedData = {
        formattedFirstName: userInfos.firstName,
        formattedScore: todayScore * 100,
        formattedCalories: keyData.calorieCount,
        formattedProteins: keyData.proteinCount,
        formattedCarbs: keyData.carbohydrateCount,
        formattedFats: keyData.lipidCount,
    }
    return formattedData;
}

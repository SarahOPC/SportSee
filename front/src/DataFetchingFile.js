// To add more cleaner code, clarity, organization, testing possibility, reusability and for separation of concern

export async function fetchUserData(userId) {
    try{
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        return data.data;
    } catch(error) {
        throw new Error("Error fetching data : " + error.message);
    }
}
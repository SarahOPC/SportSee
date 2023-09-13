import styled from 'styled-components';
import CaloriesIcon from '../assets/calories-icon.svg';
import ProteinsIcon from '../assets/protein-icon.svg';
import CarbohydratesIcon from '../assets/carbs-icon.svg';
import FatsIcon from '../assets/fat-icon.svg';
// import { fetchMockedUserData } from '../DataFetchingFile'; // For MockedData ------------
import { fetchUserData } from '../DataFetchingFile'; // For real data +++++++++++
import { formatUserData } from './DataModeling';
import { useEffect, useState } from 'react';

const NutrientsAndCaloriesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const NutrientIconContainer = styled.img`
`;

const CaloriesContainer = styled.div`
    font-weight: 600;
    font-size: 1.5em;
`;

const ProteinsContainer = styled.div`
    font-weight: 600;
    font-size: 1.5em;
`;

const CarbsContainer = styled.div`
    font-weight: 600;
    font-size: 1.5em;
`;

const FatsContainer = styled.div`
    font-weight: 600;
    font-size: 1.5em;
`;

const Calories = styled.div`
    display: flex;
    background-color: #FBFBFB;
    width: 15em;
    height: 6em;
    padding: 1.5em;
    border-radius: 0.7em;
    align-items: center;
`;

const Proteins = styled.div`
    display: flex;
    background-color: #FBFBFB;
    width: 13em;
    height: 6em;
    padding: 1.5em;
    border-radius: 0.7em;
    align-items: center;
`;

const Carbs = styled.div`
    display: flex;
    background-color: #FBFBFB;
    width: 15em;
    height: 6em;
    padding: 1.5em;
    border-radius: 0.7em;
    align-items: center;
`;

const Fats = styled.div`
    display: flex;
    background-color: #FBFBFB;
    width: 15em;
    height: 6em;
    border-radius: 0.7em;
    align-items: center;
    padding-left: 1.5em;
`;

const CaloriesWord = styled.div`
    font-weight: 600;
    color: #74798C;
`;

const ProteinsWord = styled.div`
    font-weight: 600;
    color: #74798C;
`;

const CarbsWord = styled.div`
    font-weight: 600;
    color: #74798C;
`;

const FatsWord = styled.div`
    font-weight: 600;
    color: #74798C;
`;

const CaloriesContent = styled.div`
    margin-left: 15%;
`;

const ProteinsContent = styled.div`
    margin-left: 15%;
`;

const CarbsContent = styled.div`
    margin-left: 15%;
`;

const FatsContent = styled.div`
    margin-left: 15%;
`;

function NutrientsAndCalories() {

    const [userCalories, setUserCalories] = useState(0);
    const [userProteins, setUserProteins] = useState(0);
    const [userCarbs, setUserCarbs] = useState(0);
    const [userFats, setUserFats] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                // const userData = await fetchMockedUserData('main'); // For MockedData ------------
                const userData = await fetchUserData(18, 'main'); // For real data +++++++++++
                // const dataOfUserData = userData.data; // For MockedData ------------
                // const formattedCalories = formatUserData(dataOfUserData, 'main'); // For MockedData ------------
                // const formattedProteins = formatUserData(dataOfUserData, 'main'); // For MockedData ------------
                // const formattedCarbs = formatUserData(dataOfUserData, 'main'); // For MockedData ------------
                // const formattedFats = formatUserData(dataOfUserData, 'main'); // For MockedData ------------
                const formattedCalories = formatUserData(userData, 'main'); // For real data +++++++++++
                const formattedProteins = formatUserData(userData, 'main'); // For real data +++++++++++
                const formattedCarbs = formatUserData(userData, 'main'); // For real data +++++++++++
                const formattedFats = formatUserData(userData, 'main'); // For real data +++++++++++
                setUserCalories(formattedCalories[0].formattedCalories);
                setUserProteins(formattedProteins[0].formattedProteins);
                setUserCarbs(formattedCarbs[0].formattedCarbs);
                setUserFats(formattedFats[0].formattedFats);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return(
        <NutrientsAndCaloriesContainer>
            <Calories>
                <NutrientIconContainer src={CaloriesIcon} alt='Calories icon'/>
                <CaloriesContent>
                    <CaloriesContainer>{ userCalories + "kCal" }</CaloriesContainer>
                    <CaloriesWord>Calories</CaloriesWord>
                </CaloriesContent>
            </Calories>
            <Proteins>
                <NutrientIconContainer src={ProteinsIcon} alt='Protein icon' />
                <ProteinsContent>
                    <ProteinsContainer>{ userProteins + "g"  }</ProteinsContainer>
                    <ProteinsWord>Protéines</ProteinsWord>
                </ProteinsContent>
            </Proteins>
            <Carbs>
                <NutrientIconContainer src={CarbohydratesIcon} alt='Carbs icon' />
                <CarbsContent>
                    <CarbsContainer>{ userCarbs + "g"  }</CarbsContainer>
                    <CarbsWord>Glucides</CarbsWord>
                </CarbsContent>
            </Carbs>
            <Fats>
                <NutrientIconContainer src={FatsIcon} alt='Fats icon' />
                <FatsContent>
                    <FatsContainer>{ userFats + "g"  }</FatsContainer>
                    <FatsWord>Lipides</FatsWord>
                </FatsContent>
            </Fats>
        </NutrientsAndCaloriesContainer>
    );
}

export default NutrientsAndCalories;
import styled from 'styled-components';
import CaloriesIcon from '../assets/calories-icon.svg';
import ProteinsIcon from '../assets/protein-icon.svg';
import CarbohydratesIcon from '../assets/carbs-icon.svg';
import FatsIcon from '../assets/fat-icon.svg';
import { fetchMockedUserData } from '../DataFetchingFile';
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
    margin: 25% 0%;
`;

const Proteins = styled.div`
    display: flex;
    background-color: #FBFBFB;
    margin-bottom: 25%;
`;

const Carbs = styled.div`
    display: flex;
    background-color: #FBFBFB;
    margin-bottom: 25%;
`;

const Fats = styled.div`
    display: flex;
    background-color: #FBFBFB;
    margin-bottom: 25%;
`;

const CaloriesWord = styled.div`
`;

const ProteinsWord = styled.div`
`;

const CarbsWord = styled.div`
`;

const FatsWord = styled.div`
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
                const userData = await fetchMockedUserData('main');
                const dataOfUserData = userData.data;
                const formattedCalories = formatUserData(dataOfUserData);
                const formattedProteins = formatUserData(dataOfUserData);
                const formattedCarbs = formatUserData(dataOfUserData);
                const formattedFats = formatUserData(dataOfUserData);
                setUserCalories(formattedCalories);
                setUserProteins(formattedProteins);
                setUserCarbs(formattedCarbs);
                setUserFats(formattedFats);
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
                    <CaloriesContainer>{ userCalories.formattedCalories + "kCal" }</CaloriesContainer>
                    <CaloriesWord>Calories</CaloriesWord>
                </CaloriesContent>
            </Calories>
            <Proteins>
                <NutrientIconContainer src={ProteinsIcon} alt='Protein icon' />
                <ProteinsContent>
                    <ProteinsContainer>{ userProteins.formattedProteins + "g"  }</ProteinsContainer>
                    <ProteinsWord>Protéines</ProteinsWord>
                </ProteinsContent>
            </Proteins>
            <Carbs>
                <NutrientIconContainer src={CarbohydratesIcon} alt='Carbs icon' />
                <CarbsContent>
                    <CarbsContainer>{ userCarbs.formattedCarbs + "g"  }</CarbsContainer>
                    <CarbsWord>Glucides</CarbsWord>
                </CarbsContent>
            </Carbs>
            <Fats>
                <NutrientIconContainer src={FatsIcon} alt='Fats icon' />
                <FatsContent>
                    <FatsContainer>{ userFats.formattedFats + "g"  }</FatsContainer>
                    <FatsWord>Lipides</FatsWord>
                </FatsContent>
            </Fats>
        </NutrientsAndCaloriesContainer>
    );
}

export default NutrientsAndCalories;
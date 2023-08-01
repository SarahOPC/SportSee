import styled from 'styled-components';
import CaloriesIcon from '../assets/calories-icon.svg';
import ProteinsIcon from '../assets/protein-icon.svg';
import CarbohydratesIcon from '../assets/carbs-icon.svg';
import FatsIcon from '../assets/fat-icon.svg';

const NutrientsAndCaloriesContainer = styled.div`
`;

const NutrientIconContainer = styled.img`
`;

function NutrientsAndCalories() {
    return(
        <NutrientsAndCaloriesContainer>
            <NutrientIconContainer src={CaloriesIcon} alt='Calories icon'/>
            <NutrientIconContainer src={ProteinsIcon} alt='Protein icon' />
            <NutrientIconContainer src={CarbohydratesIcon} alt='Carbs icon' />
            <NutrientIconContainer src={FatsIcon} alt='Fats icon' />
        </NutrientsAndCaloriesContainer>
    );
}

export default NutrientsAndCalories;
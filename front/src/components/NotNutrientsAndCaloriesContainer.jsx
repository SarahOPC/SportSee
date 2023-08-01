import styled from 'styled-components';
import Weight from './Weight';
import RadarKpiGoals from './RadarKpiGoals';

const NotNutrientsAndCaloriesContainer = styled.div`
`;

function NotNutrientsAndCalories() {
    return(
        <NotNutrientsAndCaloriesContainer>
            <Weight />
            <RadarKpiGoals />
        </NotNutrientsAndCaloriesContainer>
    );
}

export default NotNutrientsAndCalories;
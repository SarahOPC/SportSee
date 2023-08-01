import styled from 'styled-components';
import NutrientsAndCalories from './NutrientsAndCalories';
import NotNutrientsAndCalories from './NotNutrientsAndCaloriesContainer';
import Header from './Header';

const ElementsContainer = styled.div`
`;

function DashboardContainer() {
    return(
        <ElementsContainer>
            <Header />
            <NutrientsAndCalories />
            <NotNutrientsAndCalories />
        </ElementsContainer>
    );
}

export default DashboardContainer;
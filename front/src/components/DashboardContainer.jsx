import styled from 'styled-components';
import Header from './Header';
import NutrientsAndCalories from './NutrientsAndCalories';
import NotNutrientsAndCalories from './NotNutrientsAndCaloriesContainer';

const ElementsContainer = styled.div`
    display: flex;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RightContainer = styled.div`
`;

function DashboardContainer() {
    return(
        <ElementsContainer>
            <LeftContainer>
                <Header />
                <NotNutrientsAndCalories />
            </LeftContainer>
            <RightContainer>
                <NutrientsAndCalories />
            </RightContainer>
        </ElementsContainer>
    );
}

export default DashboardContainer;
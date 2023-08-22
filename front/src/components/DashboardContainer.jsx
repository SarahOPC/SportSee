import styled from 'styled-components';
import Header from './Header';
import NutrientsAndCalories from './NutrientsAndCalories';
import NotNutrientsAndCalories from './NotNutrientsAndCaloriesContainer';

const ElementsContainer = styled.div`
    display: flex;
    width: 100%;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 75%;
`;

const RightContainer = styled.div`
    flex: 25%;
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
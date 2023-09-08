import styled from 'styled-components';
import Header from './Header';
import NutrientsAndCalories from './NutrientsAndCalories';
import NotNutrientsAndCalories from './NotNutrientsAndCaloriesContainer';

const ElementsContainer = styled.div`
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

const LeftAndRightContainer = styled.div`
    display: flex;
`;

function DashboardContainer() {
    return(
        <ElementsContainer>
            <Header />
            <LeftAndRightContainer>
                <LeftContainer>
                    <NotNutrientsAndCalories />
                </LeftContainer>
                <RightContainer>
                    <NutrientsAndCalories />
                </RightContainer>
            </LeftAndRightContainer>
        </ElementsContainer>
    );
}

export default DashboardContainer;
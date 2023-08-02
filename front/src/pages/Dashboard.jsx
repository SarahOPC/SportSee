import HorizontalMenu from '../components/HorizontalMenu';
import VerticalMenu from '../components/VerticalMenu';
import styled from 'styled-components';
import DashboardContainer from '../components/DashboardContainer';

const DashboardTotalContainer = styled.div`
`;

const LowPart = styled.div`
    display: flex;
`;

const VerticalMenuContainer = styled.div`
    width: 15%;
`;

function Dashboard() {
    return(
        <DashboardTotalContainer>
            <HorizontalMenu />
            <LowPart>
                <VerticalMenuContainer>
                    <VerticalMenu />
                </VerticalMenuContainer>
                <DashboardContainer />
            </LowPart>
        </DashboardTotalContainer>
    );
}

export default Dashboard;
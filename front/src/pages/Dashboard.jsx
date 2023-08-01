import HorizontalMenu from '../components/HorizontalMenu';
import VerticalMenu from '../components/VerticalMenu';
import styled from 'styled-components';

const DashboardContainer = styled.div`
`;

function Dashboard() {
    return(
        <DashboardContainer>
            <HorizontalMenu />
            <VerticalMenu />
        </DashboardContainer>
    );
}

export default Dashboard;
import HorizontalMenu from '../components/HorizontalMenu';
import VerticalMenu from '../components/VerticalMenu';

function Dashboard() {
    return(
        <DashboardContainer>
            <HorizontalMenu />
            <VerticalMenu />
        </DashboardContainer>
    );
}

export default Dashboard;
import styled from 'styled-components';
import Kpi from './Kpi';
import Goals from './Goals';
import Radars from './Radars';

const RadarKpiGoalsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 700px;
    `;

function RadarKpiGoals() {
    return(
        <RadarKpiGoalsContainer>
            <Goals />
            <Radars />
            <Kpi />
        </RadarKpiGoalsContainer>
    );
}

export default RadarKpiGoals;
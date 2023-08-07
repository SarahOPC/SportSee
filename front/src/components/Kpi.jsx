import styled from 'styled-components';
import { fetchUserData } from '../DataFetchingFile';
import { RadialBar, Legend, Tooltip } from 'recharts';

const RadialBarChart = styled.div`
`;

const userId = 12;
const userData = await fetchUserData(userId);

const userKpi = userData.todayScore;
const userKpiPercentage = userKpi*100;

function Kpi() {
    return(
        <div>
            <RadialBarChart
            width={730} 
            height={250}  
            data={userKpiPercentage} 
            >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />  
            </RadialBarChart>
        </div>
    );
}

export default Kpi;
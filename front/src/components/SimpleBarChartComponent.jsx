import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts';
import styled from 'styled-components';
import BlackCircle from '../assets/blackCircle.svg';
import RedCircle from '../assets/redCircle.svg';

const StyledTootlip = styled.div`
    background-color: #E60000;
    color: #FFFFFF;
    font-size: 0.7em;
    text-align: center;
    padding: 1em;
    font-weight: 600;
`;

const CustomTooltip  = ({ active, payload }) => {   // active = is provided by recharts = if tooltip is actually active and
                                                    // payload = array of data associated to the current tooltip position
    if(active && payload && payload.length) {       // If active and there is an array of the current data and this array contains at least one element
        const data = payload[0].payload;            // extract the data of the first and only (in this case) element of the payload array
        return (
            <StyledTootlip>
                <p>{`${data.kilogram}kgs`}</p>
                <p>{`${data.calories}kCal`}</p>
            </StyledTootlip>
        );
    }
    return null;
}

const BarChartContainer = styled.div`
    width: 900px;
    background-color: #FBFBFB;
    padding: 1em;
    margin-bottom: 1em;
`;

const Title = styled.div`
    margin-left: 2em;
`;

const SpecialLegend = styled.div`
    display: flex;
    width: 19em;
    justify-content: space-between;
    color: #74798C;
`;

const AboveBarChartDiv = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    font-weight: 600;
`;

const WeightLegend = styled.p`
`;

const CaloriesLegend = styled.p`
`;

const CircleImage = styled.img`
    margin-right: 0.7em;
`;

const RenderBarChart = ({data}) => { // Accept data prop as a parameter

    return (
        <BarChartContainer>
            <AboveBarChartDiv>
                <Title>Activité quotidienne</Title>
                <SpecialLegend>
                    <WeightLegend>
                        <CircleImage src={BlackCircle} alt="black circle" />
                        Poids (kg)
                    </WeightLegend>
                    <CaloriesLegend>
                        <CircleImage src={RedCircle} alt="red circle" />
                        Calories brûlées (kCal)
                    </CaloriesLegend>
                </SpecialLegend>
            </AboveBarChartDiv>
            <BarChart
                width={900}
                height={250}
                data={data}
                >
                <CartesianGrid
                    stroke="#DEDEDE"
                    strokeDasharray="3"
                    vertical={false}
                />
                <XAxis
                    dataKey="day"
                    tickFormatter={(value, index) => index + 1}
                    tickLine={false}
                    tick={{fill: '#9B9EAC'}}
                />
                <YAxis
                    dataKey="kilogram"
                    orientation='right'
                    axisLine={false}
                    tickLine={false}
                    yAxisId="weight"
                    domain={['dataMin - 1', 'dataMax + 1']}
                    tick={{fill: '#9B9EAC'}}
                />
                <YAxis
                    yAxisId="calories"
                    axisLine={false}
                    tick={false}
                />
                <Tooltip
                    content={<CustomTooltip />}
                />
                <Bar
                    dataKey="kilogram"
                    fill="#282D30"
                    barSize={9}
                    radius={[5, 5, 0, 0]}
                    yAxisId="weight"
                />
                <Bar
                    dataKey="calories"
                    fill="#E60000"
                    barSize={9}
                    radius={[5, 5, 0, 0]}
                    yAxisId="calories"
                />
            </BarChart>
        </BarChartContainer>
    )
}

export default function SimpleBarChart({ data }) {
    return <RenderBarChart data={data} />; // Pass the data prop to renderBarChart
}

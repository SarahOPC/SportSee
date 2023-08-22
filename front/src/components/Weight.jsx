import styled from 'styled-components';
import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';
import { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const WeightContainer = styled.div`
`;

function Weight() {

    const [sessionsData, setSessionsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await fetchMockedUserData('activity');
                const dataOfUserData = userData.data;
                const formattedData = formatUserData(dataOfUserData);
                setSessionsData(formattedData);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return(
        <WeightContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={sessionsData[0]?.sessions} // ? : to render undefined if sessionsData[0] is undefined or null
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" />
                        <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" />
                    </BarChart>

                </ResponsiveContainer>
        </WeightContainer>
    );
}

export default Weight;
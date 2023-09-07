import { useState, useEffect } from 'react';
import fetchGoalsData from './FetchGoalsData';
import SimpleLineChart from './SimpleLineChartComponent';
import styled from 'styled-components';

const GoalsContainer = styled.div`
    width: fit-content;
    background-color: black;
`;

function Goals() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedData = await fetchGoalsData();
                setData(fetchedData);
                setIsLoading(false); // only when data are available
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
 
    return(
        <GoalsContainer>
            {isLoading ? ( // as long as data are not available
                <div>Loading...</div>
            ) : ( // as soon as the data are available
                <SimpleLineChart data={ data } />
            )}
        </GoalsContainer>
    );
}

export default Goals;

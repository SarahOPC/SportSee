import { useEffect, useState } from 'react';
import fetchWeightData from './FetchWeightData';
import SimpleBarChart from './SimpleBarChartComponent';
import styled from 'styled-components';

const WeightContainer = styled.div`
`;

function Weight() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedData = await fetchWeightData();
                setData(fetchedData);
                setIsLoading(false); // only when data are available
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return(
        <WeightContainer>
            {isLoading ? ( // as long as data are not available
                <div>Loading...</div>
            ) : ( // as soon as the data are available
                <SimpleBarChart data={ data } />
            )}
        </WeightContainer>
    );
}

export default Weight;
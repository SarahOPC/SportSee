import { useEffect, useState } from 'react';
import fetchRadarsData from './FetchRadarsData';
import SimpleRadarChart from './SimpleRadarChartComponent';
import styled from 'styled-components';

const RadarContainer = styled.div`
`;

function RadarFunction() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedData = await fetchRadarsData();
                setData(fetchedData);
                setIsLoading(false); // only when data are available
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return(
        <RadarContainer>
            {isLoading ? ( // as long as data are not available
                <div>Loading...</div>
            ) : ( // as soon as the data are available
                <SimpleRadarChart data={data} />
            )}
        </RadarContainer>
    );
}

export default RadarFunction;

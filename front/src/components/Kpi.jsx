// import { fetchUserData } from '../DataFetchingFile';

import { useState, useEffect } from 'react';
import RadialBarChartFunction from './RadialBarChartComponent';
import styled from 'styled-components';

const KpiContainer = styled.div`
`;

function Kpi() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedData = await fetchKpiData();
                setData(fetchedData);
                setIsLoading(false); // only when data ara available
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();      
    }, []);

    return(
        <KpiContainer>
            {isLoading ? ( // as long as data are not available
                <div>Loading...</div>
            ) : ( // as soon as the data are available
                <RadialBarChartFunction data={ data } />
            )}
        </KpiContainer>
    );
}

export default Kpi;

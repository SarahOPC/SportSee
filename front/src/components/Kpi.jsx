// import { fetchUserData } from '../DataFetchingFile';

import { useState, useEffect } from 'react';
import fetchKpiData from './FetchKpiData';
import RadialBarChartFunction from './RadialBarChartComponent';
import styled from 'styled-components';

const KpiContainer = styled.div`
    width: fit-content;
`;

const LegendDiv = styled.div`
    position: relative;
    bottom: 175px;
    left: 75px;
    background-color: #FFFFFF;
    padding: 0.3em;
    width: 6em;
`;

const ContainerOfTheChart = styled.div`
    position: absolute;
    height: 275px;
`;

const BoldSpan = styled.span`
    font-size: 1.6em;
    color: #282D30;
`;

const NotBoldSpan = styled.p`
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #74798C;
`;

const SpanBoldOrNot = styled.div`
    font-weight: 600;
    text-align: center;
`;

function Kpi() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [formattedScoreForLegend, setFormattedScoreForLegend] = useState();

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

    useEffect(() => {
        if(data.length > 0 && data[0].formattedScore !== undefined) {
        setFormattedScoreForLegend(
            <SpanBoldOrNot>
                <BoldSpan>{data[0].formattedScore} %</BoldSpan>
                <NotBoldSpan>de votre objectif</NotBoldSpan>
            </SpanBoldOrNot>
        );
        setIsLoading(false);
        }
    }, [data]);

    return(
        <KpiContainer>
            {isLoading ? ( // as long as data are not available
                <div>Loading...</div>
            ) : ( // as soon as the data are available
            <ContainerOfTheChart>
                <RadialBarChartFunction data={ data } />
                <LegendDiv>
                    { formattedScoreForLegend }
                </LegendDiv>
            </ContainerOfTheChart>
            )}
        </KpiContainer>
    );
}

export default Kpi;

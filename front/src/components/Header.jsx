import styled from 'styled-components';
import { useEffect, useState } from 'react';
// import { fetchMockedUserData } from '../DataFetchingFile'; // For MockedData ------------
import { fetchUserData } from '../DataFetchingFile'; // For real data +++++++++++
import { formatUserData } from './DataModeling';

const HeaderContainer = styled.div`
    margin: 0em 0em 1.5em 0em;
`;

const HelloYou = styled.div`
    font-size: 2.5em;
    font-weight: 600;
    display: flex;
`;

const Hello = styled.p`
    color: #000000;
`;

const You = styled.p`
    color: #FF0101;
    margin-left: 0.5em;
`;

const Congratulations = styled.p`
    font-size: 1.5em;
    font-weight: 500;
`;

function Header() {
    const [userFirstName, setUserFirstName] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                // const userData = await fetchMockedUserData('main'); // For MockedData ------------
                const userData = await fetchUserData(18, 'main'); // For real data +++++++++++
                // const dataOfUserData = userData.data; // For MockedData ------------
                // const formattedFirstName = formatUserData(dataOfUserData, 'main'); // For MockedData ------------
                const formattedFirstName = formatUserData(userData, 'main'); // For real data +++++++++++
                setUserFirstName(formattedFirstName[0].formattedFirstName);
            } catch(error) {
                console.error(error);
            }
        }
        fetchData();      
    }, []);

    if(!userFirstName) {
        return <div>Loading...</div>
    }

    return(
        <HeaderContainer>
            <HelloYou>
                <Hello>Bonjour</Hello>
                <You>{ userFirstName }</You>
            </HelloYou>
            <Congratulations>Félicitations ! Vous avez explosé vos objectifs hier 👏</Congratulations>
        </HeaderContainer>
    );
}

export default Header;

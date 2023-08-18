import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchMockedUserData } from '../DataFetchingFile';
import { formatUserData } from './DataModeling';

const HeaderContainer = styled.div`
    margin: 2.5em 0.5em 2.5em 9.5em;
`;

const HelloYou = styled.div`
    font-size: 3em;
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
                const userData = await fetchMockedUserData('main');
                const dataOfUserData = userData.data;
                const formattedFirstName = formatUserData(dataOfUserData);
                setUserFirstName(formattedFirstName);
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
                <You>{ userFirstName.formattedFirstName }</You>
            </HelloYou>
            <Congratulations>Félicitations ! Vous avez explosé vos objectifs hier 👏</Congratulations>
        </HeaderContainer>
    );
}

export default Header;

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import dataModel from './DataModeling';

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
        console.log(dataModel);
        console.log(dataModel.formattedUserData);
        const formattedUserData = dataModel.mainData;
        console.log(formattedUserData);
        const firstName = formattedUserData[0].nom;
        setUserFirstName(firstName);
        /* const fetchData = async () => {
            try {
                const data = await fetchUserData(userId);
                setUserData(data);
            } catch(error) {
                console.error("Error while fetching data : ", error.message);
            }
        };
        fetchData(); */
    }, []);

    if(!userFirstName) {
        return <div>Loading...</div>
    }
    /* if(!userData) {
        return <div>Loading...</div>;
    }

    const userFirstName = userData.userInfos.firstName;
     */

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

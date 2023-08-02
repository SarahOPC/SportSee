import styled from 'styled-components';
import { fetchUserData } from '../DataFetchingFile';

const firstUserId = 12;
// const secondUserId = 18;

const firstUserData = await fetchUserData(firstUserId);
// const secondUserData = await fetchUserData(secondUserId);

const firstUserFirstName = firstUserData.userInfos.firstName;
// const secondUserFirstName = secondUserData.userInfos.firstName;

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
    return(
        <HeaderContainer>
            <HelloYou>
                <Hello>Bonjour</Hello>
                <You>{ firstUserFirstName }</You>
            </HelloYou>
            <Congratulations>Félicitations ! Vous avez explosé vos objectifs hier 👏</Congratulations>
        </HeaderContainer>
    );
}



export default Header;
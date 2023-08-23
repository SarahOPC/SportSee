import styled from 'styled-components';

const Items = styled.div`
    color: #FFFFFF;
    margin-right: 9.5em;
    font-size: 1.5em;
`;

const NavItemsContainer = styled.div`
    display: flex;
    margin-left: 8.5em;
`;

function NavItems() {
    return(
        <NavItemsContainer>
            <Items>Accueil</Items>
            <Items>Profil</Items>
            <Items>Réglages</Items>
            <Items>Communauté</Items>
        </NavItemsContainer>
    );
}

export default NavItems;

import styled from 'styled-components';

const Items = styled.div`
    color: #FFFFFF;
    margin-right: 15em;
    font-size: 1.5em;
`;

const NavItemsContainer = styled.div`
    display: flex;
    margin-left: 12em;
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

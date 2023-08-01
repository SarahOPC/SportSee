import styled from 'styled-components';

const Items = styled.div`
    color: #FFFFFF;
`;

const NavItemsContainer = styled.div`
`;

function NavItems() {
    return(
        <NavItemsContainer>
            <Items Accueil/>
            <Items Profil/>
            <Items Réglages/>
            <Items Communauté/>
        </NavItemsContainer>
    );
}

export default NavItems;
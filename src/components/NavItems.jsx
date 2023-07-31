import styled from 'styled-components';

const Items = styled.div`
    color: #FFFFFF;
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
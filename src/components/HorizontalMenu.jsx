import Logo from './Logo';
import NavItems from './NavItems';
import styled from 'styled-components';

const HorizontalMenuContainer = styled.div`
    background-color: #000000;
`;

function HorizontalMenu() {
    return(
        <HorizontalMenuContainer>
            <Logo />
            <NavItems />
        </HorizontalMenuContainer>
    );
}

export default HorizontalMenu;
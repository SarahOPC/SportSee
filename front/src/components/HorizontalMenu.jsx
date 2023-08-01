import Logo from './Logo';
import NavItems from './NavItems';
import styled from 'styled-components';

const HorizontalMenuContainer = styled.div`
    background-color: #000000;
    display: flex;
    align-items: center;
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

import logo from '../assets/logo.svg';
import styled from 'styled-components';

const LogoImg = styled.img`
`;

function Logo() {
    return(
        <LogoImg src={logo} alt="logo" />
    );
}

export default Logo;
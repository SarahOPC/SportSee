import logo from '../assets/logo.svg';
import styled from 'styled-components';

const LogoImg = styled.img`
    margin: 1em 2em;
`;

function Logo() {
    return(
        <LogoImg src={logo} alt="logo" />
    );
}

export default Logo;
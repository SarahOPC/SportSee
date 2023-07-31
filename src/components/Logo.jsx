import logo from '../assets/logo';
import styled from 'styled-components';

const Logo = styled.img`
`;

function Logo() {
    return(
        <Logo src={logo} alt="logo" />
    );
}

export default Logo;
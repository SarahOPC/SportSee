import VerticalIcon from "./VerticalIcon";
import Relax from '../assets/relax.svg';
import Swim from '../assets/swim.svg';
import Bicycle from '../assets/bicycle.svg';
import LiftingWeights from '../assets/liftingWeights.svg';
import styled from 'styled-components';

const VerticalMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000000;
    width: 7em;
    height: 55em;
`;

const IconContainer = styled.div`
    margin: 13em 0em 0em 0em;
`;

const Copyright = styled.div`
    color: #FFFFFF;
    rotate: 270deg;
    width: max-content;
    align-self: center;
    margin-top: 11em;
`;

function VerticalMenu() {
    return (
        <VerticalMenuContainer>
            <IconContainer>
                <VerticalIcon src={ Relax } alt="relaxation icon" />
                <VerticalIcon src={ Swim } alt="swimming icon" />
                <VerticalIcon src={ Bicycle } alt="Cycling icon" />
                <VerticalIcon src={ LiftingWeights } alt="lifting weights icon" />
            </IconContainer>
                <Copyright>Copyright, SportSee 2020</Copyright>
        </VerticalMenuContainer>
    );
}

export default VerticalMenu;
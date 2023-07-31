import VerticalIcon from "./VerticalIcon";
import Relax from '../assets/relax.svg';
import Swim from '../assets/swim.svg';
import Bicycle from '../assets/bicycle.svg';
import LiftingWeights from '../assets/liftingWeights.svg';

function VerticalMenu() {
    return (
        <VerticalMenuContainer>
            <VerticalIcon src={ Relax } alt="relaxation icon" />
            <VerticalIcon src={ Swim } alt="swimming icon" />
            <VerticalIcon src={ Bicycle } alt="Cycling icon" />
            <VerticalIcon src={ LiftingWeights } alt="lifting weights icon" />
        </VerticalMenuContainer>
    );
}

export default VerticalMenu;
import styled from 'styled-components';

const Icon = styled.img`
`

function VerticalIcon({ src, alt }) {
    return(
        <Icon src={ src } alt={ alt }/>
    );
}

export default VerticalIcon;
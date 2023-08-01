import styled from 'styled-components';

const Icon = styled.img`
    width: 4em;
    height: 4em;
    margin: 0.75em 1.5em;
`

function VerticalIcon({ src, alt }) {
    return(
        <Icon src={ src } alt={ alt }/>
    );
}

export default VerticalIcon;
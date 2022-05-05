import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: ${props => props.grow || 0};
`;

export const Col = styled.div`
    flex-basis: 100%;

    @media (min-width: 500px) {
        flex: ${props => props.xs || 'auto'};
    }
`;
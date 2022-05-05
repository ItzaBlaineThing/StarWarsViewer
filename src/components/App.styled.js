import styled from 'styled-components';

export const AppOuterWrapper = styled.div`
    background-color: #F3F3F3;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 100vh;
`;

export const AppInnerWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 8fr;
    padding: 2rem;
    grid-row-gap: 2rem;
`

export const HeaderWrapper = styled.div`
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.4); */
`;
import styled from 'styled-components';

export const TabWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 0fr 3fr;
    grid-template-rows: 100%;
    min-width: 0;
    min-height: 0;
    overflow: auto;
    grid-column-gap: 1rem;

    > div {
        border-radius: 4px;
    }
`;

export const Divider = styled.div`
    width: 1px;
    border-right: 1px solid rgba(0, 0, 0, 0.4);
`;
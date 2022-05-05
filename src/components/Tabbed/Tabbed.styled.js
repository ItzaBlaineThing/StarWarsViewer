import styled from 'styled-components';

export const TabbedWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0fr 1fr;
    min-width: 0;
    min-height: 0;
    grid-row-gap: 1rem;
`;

export const TabbedNav = styled.ul`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

export const TabbedNavItem = styled.li`
    list-style: none;
    background-color: ${props => props.active && '#FFFFFF'};
    border: ${props => props.active && 'solid rgba(0, 0, 0, 0.4)'};
    border-radius: ${props => props.active && '4px 4px 0px 0px'};
    border-width: ${props => props.active ? '1px 1px 0 1px' : '0px 0px 1px 0px'};
    margin-bottom: -1px;
    padding: 1rem 2rem;
    cursor: pointer;
`;

export const TabbedContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0fr 1fr;
    min-width: 0;
    min-height: 0;
    grid-row-gap: 1rem;
`;
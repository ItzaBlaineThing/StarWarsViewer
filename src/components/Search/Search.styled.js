import styled from 'styled-components';

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchLabel = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
`;

export const SearchBox = styled.input`
    background-color: #FFF;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    width: 50%;
`;

export const SearchButton = styled.button`
    background-color: #2261B5;
    color: #FFF;
    padding: 0.5rem 2rem;
    border: 1px solid #2261B5;
    border-radius: 4px;
`;
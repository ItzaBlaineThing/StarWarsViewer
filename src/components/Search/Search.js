import React from 'react';
import { SearchBox, SearchButton, SearchLabel, SearchWrapper } from './Search.styled';

export const Search = () => {
    return (
        <SearchWrapper>
            <SearchLabel>Search</SearchLabel>
            <SearchBox placeholder="Name, Gender, Birth Year, Eye Color, Hair Color" />
            <SearchButton>Search</SearchButton>
        </SearchWrapper>
    )
}
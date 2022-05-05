import React from 'react';
import { SearchBox, SearchButton, SearchLabel, SearchWrapper } from './Search.styled';

export const Search = () => {
    return (
        <SearchWrapper>
            <SearchLabel>Search</SearchLabel>
            <SearchBox placeholder="Receiver, Payer ID, Transaction Type, Mode, # of Edits" />
            <SearchButton>Search</SearchButton>
        </SearchWrapper>
    )
}
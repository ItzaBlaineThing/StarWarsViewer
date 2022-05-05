import React, { useState } from 'react';
import { Tab } from '../Tab/Tab';
import { TabbedContent, TabbedNav, TabbedNavItem, TabbedWrapper } from './Tabbed.styled';

export const Tabbed = ({ activeTab, setActiveTab }) => {

    const tabTypes = ['people', 'films', 'starships', 'vehicles', 'species', 'planets'];

    return (
        <TabbedWrapper>
            <TabbedNav>
                {tabTypes.map(type => {
                    return <TabbedNavItem key={type} active={activeTab === type} onClick={() => setActiveTab(type)}>{type[0].toUpperCase() + type.substring(1)}</TabbedNavItem>
                })}
            </TabbedNav>
            <TabbedContent>
                {/* Display the selected tab content */}
                {tabTypes.map(type => {
                    return (
                        activeTab === type && <Tab key={type} activeTab={activeTab} />
                    )
                })}
            </TabbedContent>
        </TabbedWrapper>
    )
}
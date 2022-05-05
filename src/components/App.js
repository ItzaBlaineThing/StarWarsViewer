// Import React
import React, { useState } from 'react';

// Import Components
import { AppInnerWrapper, AppOuterWrapper, HeaderWrapper } from './App.styled';

import { ReactQueryDevtools } from 'react-query/devtools';

// Create component function
export default function App() {

    const [activeTab, setActiveTab] = useState('people');

	return (
        <>
            <AppOuterWrapper>
                <AppInnerWrapper>
                    <HeaderWrapper>
                        <h1>Star Wars API Viewer</h1>
                        <hr />
                    </HeaderWrapper>
                </AppInnerWrapper>
            </AppOuterWrapper>
            <ReactQueryDevtools initialIsOpen={false} />
        </>
	)
}
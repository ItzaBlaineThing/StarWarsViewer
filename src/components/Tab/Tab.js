import React, { useState } from 'react';
import { LivePreview } from '../LivePreview/LivePreview';
import { Results } from '../Results/Results';
import { Search } from '../Search/Search';
import { Divider, TabWrapper } from './Tab.styled';

import { useInfiniteQuery } from 'react-query';

const fetchData = async ({ queryKey, pageParam = 1 }) => {
    const [key] = queryKey;
    const res = await fetch(`https://swapi.dev/api/${key}/?page=${pageParam}`);
    const results = await res.json();
    // Return the results json and the next page number if next page exists or undefined if not which will stop the fetching
    return { data: results, nextPage: results.next !== null ? pageParam + 1 : undefined };
}

export const Tab = ({ activeTab }) => {

    // React-query fetch request to API
    const { data, status, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, error } = useInfiniteQuery([activeTab], fetchData, {
        getNextPageParam: (lastPage) => {
            // Return the next pageParam, which will be prevPage + 1 or undefined if there are no more pages
            return lastPage.nextPage
        }
    });

    const [result, setResult] = useState();

    const updateResult = (data) => {
        console.log(data);
        setResult(data);
    }

    return (
        <>
            <Search />

            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <TabWrapper>
                    <Results activeTab={activeTab} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} pages={data.pages} updateResult={updateResult} />
                    <Divider />
                    <LivePreview result={result} />
                </TabWrapper>
            )}
        </>
    )
}
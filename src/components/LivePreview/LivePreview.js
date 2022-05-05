import React from 'react';
import { LivePreviewContentWrapper, LivePreviewLabel, LivePreviewSection, LivePreviewText, LivePreviewWrapper } from './LivePreview.styled';

export const LivePreview = ({ result }) => {

    // console.log(result);

    // Testing Log
    result !== undefined && console.log(result);

    return (
        <LivePreviewWrapper>
            <LivePreviewContentWrapper>

                {result === undefined && (
                    <h4>Select a result card to view it's data</h4>
                )}

                {result !== undefined && <h1>{result.name}</h1>}
                {result !== undefined && Object.keys(result).map(item => {
                    return (
                        <LivePreviewSection key={item}>
                            <LivePreviewLabel>{item}</LivePreviewLabel>
                            <LivePreviewText>{result[item]}</LivePreviewText>
                        </LivePreviewSection>
                    )
                })}
            </LivePreviewContentWrapper>
        </LivePreviewWrapper>
    )
}
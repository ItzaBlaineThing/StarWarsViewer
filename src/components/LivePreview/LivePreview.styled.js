import styled from 'styled-components';

export const LivePreviewWrapper = styled.div`
    background-color: rgba(196, 196, 196, 0.5);
    padding: 1rem;
`;

export const LivePreviewContentWrapper = styled.div`
    background-color: #FFF;
    height: 100%;
    border-radius: 4px;
    padding: 1rem;
    min-width: 0;
    min-height: 0;
    overflow: auto;
    word-breaK: break-all;
`;

export const LivePreviewSection = styled.div`
    margin: 0.2rem;
`;

export const LivePreviewLabel = styled.h6`
    color: #000;
    text-transform: uppercase;
    font-size: 1rem;
`;

export const LivePreviewText = styled.p`
    color: gray;
    text-transform: uppercase;
`;
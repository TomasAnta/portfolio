"use client";

import styled from "styled-components";

export const LanguageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    color: #fff;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.2px;
    letter-spacing: 0.16px;
`;

export const LangItem = styled.span<{ $active: boolean }>`
    opacity: ${({ $active }) => ($active ? 1 : 0.4)};
    text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
    pointer-events: ${({ $active }) => ($active ? "none" : "auto")};

    a {
        color: inherit;
        text-decoration: inherit;
    }
`;

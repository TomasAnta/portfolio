"use client";
import styled from "styled-components";
import { typography, spacings } from "@/styles/design-variables";

export const LanguageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${spacings.s16};
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: ${typography.fonts.inter};
    font-size: ${typography.fontSizes.f16};
    font-weight: ${typography.fontWeights.medium};
    line-height: ${typography.lineHeights.lh20};
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

"use client";

import styled from "styled-components";
import { spacings, colors, typography } from "@/styles/design-variables";

export const StyledButton = styled.button`
    border-radius: ${spacings.s16};
    background: ${colors.navigation.buttonBackground};
    color: ${colors.primaryText};
    font-size: ${typography.fontSizes.f16};
    font-weight: ${typography.fontWeights.semibold};
    padding: ${spacings.s16} ${spacings.s32};
    text-align: center;
    border: none;
    cursor: pointer;

    &:hover {
        background: ${colors.navigation.buttonHover};
        transition: ${colors.transitions.hover};
    }
`;

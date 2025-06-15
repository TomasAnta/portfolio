"use client";
import styled from "styled-components";
import {
    colors,
    layout,
    spacings,
    typography,
} from "@/styles/design-variables";
import { flexMixin, glowHoverEffect } from "@/styles/mixins";

export const StyledHeader = styled.header`
    ${flexMixin.rowCentered}
`;

export const StyledNav = styled.nav`
    ${flexMixin.rowSpaceBetween}
    font-family: ${typography.fonts.inter};
    padding-top: ${spacings.s24};
    margin: 0 auto;
    max-width: ${layout.maxWidth};
`;

export const StyledLogo = styled.div`
    font-size: ${typography.fontSizes.f36};
    font-family: ${typography.fonts.outfit};
    font-weight: ${typography.fontWeights.medium};
    line-height: ${typography.lineHeights.lh72};
    letter-spacing: -2.6px;
    color: ${colors.primaryText};

    a {
        display: inline-block;
        text-decoration: none;
        color: inherit;
    }

    span {
        display: inline-block;
        font-weight: ${typography.fontWeights.light};
        margin-left: ${spacings.s8};
        ${glowHoverEffect}
    }
`;

export const StyledUl = styled.ul`
    ${flexMixin.rowJustifyCenter}
    padding-left: 0;
    list-style-type: none;
    gap: ${spacings.s48};
`;

export const StyledList = styled.li<{ $active?: boolean }>`
    color: ${({ $active }) =>
        $active ? colors.navigation.active : colors.navigation.inactive};
    font-size: ${typography.fontSizes.f16};
    font-weight: ${typography.fontWeights.medium};
    line-height: ${typography.lineHeights.lh20};

    &:hover {
        color: ${colors.navigation.hover};
        transition: ${colors.transitions.hover};
    }
`;

export const StyledLanguage = styled.div`
    ${flexMixin.rowCentered}
    gap: ${spacings.s16};
    color: ${colors.primaryText};
    font-size: ${typography.fontSizes.f16};
    font-weight: ${typography.fontWeights.medium};
    line-height: ${typography.lineHeights.lh20};
`;

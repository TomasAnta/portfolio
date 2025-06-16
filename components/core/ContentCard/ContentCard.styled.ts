"use-client";
import { spacings } from "@/styles/design-variables";
import styled from "styled-components";

/**
 * StyledCard is a styled component that represents a card-like container.
 * It accepts a background, padding, maxWidth, borderColor as props.
 *
 *
 * @param {string} $background - The background of the card.
 * @param {string} $padding - The padding inside the card.
 * @param {string} $maxWidth - The max width of the card.
 * @param {string} $borderColor - Border color of the card.
 * @param {string} $gap - Card Gap.
 */

interface StyledCardProps {
    $background: string;
    $padding: string;
    $maxWidth: string;
    $borderColor: string;
    $gap?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
    display: flex;
    flex-direction: row;
    position: relative;
    background: ${({ $background }) => $background || "#000"};
    backdrop-filter: blur(20px);
    padding: ${({ $padding }) => $padding || "16px"};
    max-width: ${({ $maxWidth }) => $maxWidth || "100%"};
    border: 1px solid
        ${({ $borderColor }) => $borderColor || "rgba(255, 255, 255, 0.50);"};
    width: 100%;
    margin: auto;
    border-radius: ${spacings.s32};
    gap: ${({ $gap }) => $gap || "initial"};
`;

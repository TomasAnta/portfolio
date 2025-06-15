import { css } from "styled-components";
import { colors } from "./design-variables";

export const flexMixin = {
    rowCentered: css`
        display: flex;
        flex-direction: row;
        align-items: center;
    `,

    // Space-between row
    rowSpaceBetween: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `,

    // Centered row
    rowJustifyCenter: css`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `,

    // Basic centered flex column
    columnCentered: css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
} as const;

export const glowHoverEffect = css`
    transition:
        transform 0.3s ease,
        text-shadow 0.3s ease,
        color 0.3s ease;

    &:hover {
        transform: translateX(6px);
        text-shadow:
            0 0 5px ${colors.logoGlow},
            0 0 10px ${colors.logoGlow};
        color: ${colors.logoGlow};
    }
`;

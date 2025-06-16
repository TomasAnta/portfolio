import React from "react";
import { StyledCard } from "./ContentCard.styled";

interface ContentCardProps {
    padding: string;
    background: string;
    borderColor: string;
    maxWidth: string;
    gap?: string;
    children?: React.ReactNode;
}

const ContentCard = ({
    padding,
    background,
    children,
    borderColor,
    maxWidth,
    gap,
}: ContentCardProps) => {
    return (
        <StyledCard
            $padding={padding}
            $background={background}
            $borderColor={borderColor}
            $maxWidth={maxWidth}
            $gap={gap}
        >
            {children}
        </StyledCard>
    );
};

export default ContentCard;

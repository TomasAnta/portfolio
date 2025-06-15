import React from "react";
import { StyledCard } from "./ContentCard.styled";

interface ContentCardProps {
    padding: string;
    background: string;
    borderColor: string;
    maxWidth: string;
    children?: React.ReactNode;
}

const ContentCard = ({
    padding,
    background,
    children,
    borderColor,
    maxWidth,
}: ContentCardProps) => {
    return (
        <StyledCard
            $padding={padding}
            $background={background}
            $borderColor={borderColor}
            $maxWidth={maxWidth}
        >
            {children}
        </StyledCard>
    );
};

export default ContentCard;

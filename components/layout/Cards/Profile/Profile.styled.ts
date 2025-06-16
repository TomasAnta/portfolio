"use client";
import styled from "styled-components";

export const StyledImage = styled.div`
    max-width: 224px;
`;

export const StyledText = styled.div`
    display: flex;
    flex-direction: column;

    svg {
        position: absolute;
        right: 31px;
        bottom: 36px;
    }
`;

export const StyledSpeciality = styled.h4`
    color: rgba(188, 188, 188, 0.7);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 8px;
`;
export const StyledName = styled.h2`
    color: #fff;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 111.111% */
    letter-spacing: -0.72px;
    margin-bottom: 10px;
`;
export const StyledDescription = styled.p`
    color: rgba(255, 255, 255, 0.6);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.2px; /* 137.143% */
    letter-spacing: 0.42px;
`;

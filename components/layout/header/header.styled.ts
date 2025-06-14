"use client";

import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledNav = styled.nav`
    padding-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1160px;
    margin: 0 auto;
`;

export const StyledLogo = styled.div`
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 72px;
    letter-spacing: -2.6px;
    color: #fff;
`;

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 49px;
    list-style-type: none;
    padding-left: 0;
`;

export const StyledList = styled.li`
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.2px; /* 120% */
    letter-spacing: 0.16px;
`;

export const StyledLanguage = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.2px; /* 120% */
    letter-spacing: 0.16px;
`;

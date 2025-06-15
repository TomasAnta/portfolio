"use client";

import styled from "styled-components";
import { colors } from "@/styles/design-variables";

export const PageWrapper = styled.section`
    background: ${colors.pageBackground};
    min-height: 100vh;
`;

export const PageGrid = styled.section`
    display: grid;
    margin-top: 70px;
`;

"use client";
import { atomasTheme } from "@/styles/SystemDesign";
import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={atomasTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}

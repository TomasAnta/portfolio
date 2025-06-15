"use client";
import { atomasTheme } from "@/styles/system-design";
import GlobalStyle from "@/styles/global-style";
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

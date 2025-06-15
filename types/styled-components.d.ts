import "styled-components";
import {
    AppBreakpointsType,
    AppColorsType,
    AppSpacingType,
    AppLayoutType,
} from "@/styles/design-variables";

declare module "styled-components" {
    export interface DefaultTheme {
        theme: "atomasTheme";
        colors: AppColorsType;
        breakpoints: AppBreakpointsType;
        typography: AppTypographyType;
        spacings: AppSpacingType;
        layout: AppLayoutType;
    }
}

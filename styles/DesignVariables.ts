export const layout = {
    maxWidth: "1160px",
    padding: "0 24px",
};

export type AppLayoutType = typeof layout;

export const colors = {};

export type AppColorsType = typeof colors;

export const responsiveBreakPoints = {
    maxSmallPhone: "(max-width: 380px)",
    maxPhone: "(max-width: 480px)",
    maxTablet: "(max-width: 768px)",
    maxSmallDesktop: "(max-width: 992px)",
    maxDefaultDesktop: "(max-width: 1200px)",
    maxMediumDesktop: "(max-width: 1440px)",
};

export type AppBreakpointsType = typeof responsiveBreakPoints;

export const fontSizes = {};

export type AppFSType = typeof fontSizes;

export const lineHeights = {};

export type AppLineHeightsType = typeof lineHeights;

export const spacings = {
    s8: "8px",
    s10: "10px",
    s12: "12px",
    s14: "14px",
    s16: "16px",
    s20: "20px",
    s24: "24px",
    s32: "32px",
    s34: "34px",
    s36: "36px",
    s38: "38px",
    s40: "40px",
};

export type AppSpacingType = typeof spacings;

export const fontWeights = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
};

export type AppFontWeightType = typeof fontWeights;

export const layout = {
    maxWidth: "1160px",
    padding: "0 24px",
} as const;
export type AppLayoutType = typeof layout;

export const colors = {
    primaryText: "#FFF",
    secondaryText: "rgba(188, 188, 188, 0.70)",
    pageBackground: "#0F0F0F",
    logoGlow: "#0ff",
    navigation: {
        inactive: "#676767",
        active: "#FFF",
        hover: "#Fff9",
        buttonBackground: "#323232",
        buttonHover: "#3A3A3A",
    },
    transitions: {
        animation: "all 0.4s ease-in-out",
        hover: "all 0.3s ease-in-out",
    },
} as const;
export type AppColorsType = typeof colors;

export const breakpoints = {
    dimensions: {
        smallPhone: 380,
        phone: 480,
        tablet: 768,
        smallDesktop: 992,
        defaultDesktop: 1200,
        mediumDesktop: 1440,
    },
    max: {
        smallPhone: "(max-width: 380px)",
        phone: "(max-width: 480px)",
        tablet: "(max-width: 768px)",
        smallDesktop: "(max-width: 992px)",
        defaultDesktop: "(max-width: 1200px)",
        mediumDesktop: "(max-width: 1440px)",
    },
    min: {
        smallPhone: "(min-width: 381px)",
        phone: "(min-width: 481px)",
        tablet: "(min-width: 769px)",
        smallDesktop: "(min-width: 993px)",
        defaultDesktop: "(min-width: 1201px)",
        mediumDesktop: "(min-width: 1441px)",
    },
} as const;
export type AppBreakpointsType = typeof breakpoints;

export const typography = {
    fonts: {
        inter: "Inter, sans-serif",
        outfit: "Outfit, sans-serif",
    },
    fontSizes: {
        f12: "12px",
        f14: "14px",
        f15: "15px",
        f16: "16px",
        f18: "18px",
        f20: "20px",
        f24: "24px",
        f28: "28px",
        f32: "32px",
        f36: "36px",
    },
    lineHeights: {
        lh12: "12px",
        lh14: "14px",
        lh15: "15px",
        lh16: "16px",
        lh18: "18px",
        lh20: "20px",
        lh24: "24px",
        lh28: "28px",
        lh32: "32px",
        lh36: "36px",
        lh40: "40px",
        lh44: "44px",
        lh48: "48px",
        lh52: "52px",
        lh56: "56px",
        lh60: "60px",
        lh64: "64px",
        lh72: "72px",
        lh80: "80px",
    },
    fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },
} as const;
export type AppTypographyType = typeof typography;

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
    s48: "48px",
    s56: "56px",
} as const;
export type AppSpacingType = typeof spacings;

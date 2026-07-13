/**
 * Design tokens — single source of truth for colors, spacing, typography,
 * borders and shadows. Consumed by src/lib/theme.ts to build the MUI theme.
 * Update these values to match Figma, not component code.
 */

export const colorTokens = {
  brand: {
    main: "#1B4F72",
    light: "#3E7CA6",
    dark: "#0F2E42",
  },
  status: {
    success: "#2E7D32",
    warning: "#ED6C02",
    error: "#C62828",
    info: "#0277BD",
  },
  neutral: {
    50: "#FAFAFA",
    100: "#F4F5F7",
    200: "#E4E7EB",
    300: "#CBD2D9",
    400: "#9AA5B1",
    500: "#697586",
    600: "#4B5565",
    700: "#364152",
    800: "#202939",
    900: "#121926",
  },
  background: {
    default: "#F4F5F7",
    paper: "#FFFFFF",
  },
} as const;

export const spacingTokens = {
  unit: 8,
} as const;

export const radiusTokens = {
  sm: 4,
  md: 8,
  lg: 16,
} as const;

export const shadowTokens = {
  sm: "0px 1px 2px rgba(18, 25, 38, 0.08)",
  md: "0px 4px 8px rgba(18, 25, 38, 0.12)",
  lg: "0px 8px 24px rgba(18, 25, 38, 0.16)",
} as const;

export const typographyTokens = {
  fontFamily: "var(--font-roboto), Roboto, Arial, sans-serif",
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
} as const;

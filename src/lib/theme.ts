import { createTheme } from "@mui/material/styles";

import {
  colorTokens,
  radiusTokens,
  spacingTokens,
  typographyTokens,
} from "./tokens";

export const theme = createTheme({
  spacing: spacingTokens.unit,
  palette: {
    mode: "light",
    primary: {
      main: colorTokens.brand.main,
      light: colorTokens.brand.light,
      dark: colorTokens.brand.dark,
    },
    success: { main: colorTokens.status.success },
    warning: { main: colorTokens.status.warning },
    error: { main: colorTokens.status.error },
    info: { main: colorTokens.status.info },
    background: colorTokens.background,
    grey: colorTokens.neutral,
  },
  typography: {
    fontFamily: typographyTokens.fontFamily,
    fontWeightRegular: typographyTokens.fontWeight.regular,
    fontWeightMedium: typographyTokens.fontWeight.medium,
    fontWeightBold: typographyTokens.fontWeight.bold,
  },
  shape: {
    borderRadius: radiusTokens.md,
  },
});

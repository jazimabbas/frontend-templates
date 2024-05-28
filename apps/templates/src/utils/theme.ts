"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: { fontFamily: "var(--font-family)" },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 576,
      tablet: 768,
      desktop: 1440,
    },
  },
});

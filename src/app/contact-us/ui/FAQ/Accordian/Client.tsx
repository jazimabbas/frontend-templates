"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",

  "&:not(:first-of-type)": {
    paddingTop: "28px",
  },

  "&:last-of-type": {
    "& hr": {
      display: "none",
    },
  },

  "& hr": {
    border: "1px solid var(--color-text-300)",
  },
});

export const Item = styled("div")({
  display: "flex",
  gap: "16px",
});

export const Content = styled("div")({
  flex: 1,
});

export const Title = styled("h5")({
  fontSize: "1.125rem",
  fontWeight: "var(--font-medium)",
  marginBottom: "8px",
  color: "var(--color-dark)",
  width: "100%",
  textAlign: "left",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
});

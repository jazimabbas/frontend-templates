"use client";
import { styled } from "@mui/material";

export const Title = styled("p")({
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "var(--color-text-900)",
  fontWeight: "var(--font-semibold)",
  fontSize: "1rem",
});

export const Items = styled("div")({
  marginTop: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const Item = styled("button")({
  border: "none",
  textAlign: "left",
  padding: "12px",
  marginLeft: "-12px",
  color: "var(--color-text)",
  borderRadius: "5px",
  fontSize: "0.875rem",
  cursor: "pointer",
  backgroundColor: "transparent",

  "&[aria-selected='true']": {
    backgroundColor: "#A9EAC7",
    "&:hover": {
      backgroundColor: "#A9EAC7",
    },
  },

  "&:hover": {
    backgroundColor: "#dbdbdb",
  },
});

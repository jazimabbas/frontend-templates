"use client";
import { styled } from "@mui/material";

export const Header = styled("div")({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  marginBottom: "5px",

  "& > :first-child": {
    flex: 1,
    fontWeight: "var(--font-medium)",
  },
});

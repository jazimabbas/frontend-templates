"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("button")({
  padding: "1.667px",
  backgroundColor: "transparent",
  border: "1px solid transparent",
  cursor: "pointer",
  color: "var(--color-text)",
  transition: "color 0.3s, box-shadow 0.3s, border-radius 0.3s",

  "&:hover, &:focus": {
    color: "var(--color-dark)",
  },

  "&:focus": {
    boxShadow: "0px 0px 0px 4px rgba(68, 76, 231, 0.12)",
    borderRadius: "4px",
  },

  "&:disabled": {
    color: "var(--color-text-disabled)",
    cursor: "not-allowed",
  },

  "a&": {
    display: "block",
  },
});

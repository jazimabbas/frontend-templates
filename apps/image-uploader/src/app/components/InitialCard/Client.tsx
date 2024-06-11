"use client";
import { styled } from "@mui/material";

export const Radio = styled("input")({
  "--size": "20px",
  "--inner-size": "12px",

  appearance: "none",
  boxSizing: "border-box",
  backgroundColor: "var(--color-base)",
  height: "var(--size)",
  width: "var(--size)",
  borderRadius: "50%",
  border: "2px solid var(--color-primary)",
  transform: "translateY(-1px)", // half from the border width
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&::before": {
    content: "''",
    width: "var(--inner-size)",
    height: "var(--inner-size)",
    borderRadius: "50%",
    transform: "scale(0)",
    backgroundColor: "var(--color-primary)",
    transition: "120ms transform ease-in-out",
  },

  "&:checked::before": {
    transform: "scale(1)",
  },
});

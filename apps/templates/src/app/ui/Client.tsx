"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 30px",
});

export const Label = styled("p")({
  fontSize: "1.5rem",
  color: "var(--color-dark)",
  fontWeight: "var(--font-medium)",
  marginBottom: "10px",
});

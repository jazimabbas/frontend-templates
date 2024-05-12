"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 16px",
  border: "1px solid var(--color-text-300)",
  overflow: "hidden",
  backgroundColor: "var(--color-base)",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
});

export const Title = styled("p")({
  color: "var(--color-dark)",
  fontWeight: "var(--font-semibold)",
});

export const Chip = styled("a")({
  fontSize: "0.875rem",
  backgroundColor: "green",
  padding: "5px",
});

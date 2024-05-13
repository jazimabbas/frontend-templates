"use client";
import { styled } from "@mui/material";

export const Wrapper = styled('div')({
  "--color-border": "var(--color-text-300)",

  border: "1px solid var(--color-border)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  overflow: "hidden",
});

export const Iframe = styled("iframe")({
  border: "none",
});

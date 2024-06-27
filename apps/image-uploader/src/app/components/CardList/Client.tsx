"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  "--spacing": "32px",

  display: "flex",
  flexDirection: "column",
  gap: "var(--spacing)",
  marginTop: "var(--spacing)",
});

export const Actions = styled("div")({
  display: "flex",
  gap: "16px",

  "& > *": {
    width: "100%",
  },
});

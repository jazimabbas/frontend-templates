"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(148deg, #F9FAFB 8.89%, #D2D6DB 100.48%)",
  width: "100%",
  minHeight: "100%",
  zIndex: 1,
  padding: "16px",
  paddingTop: "32px",
  overflow: "auto",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "30px",
});

export const Items = styled("ul")({
  padding: 0,
  listStyle: "none",
  paddingTop: "40px",
  fontWeight: "var(--font-medium)",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
});

export const ButtonsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

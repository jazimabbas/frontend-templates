"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("header")({
  padding: "20px",
  backgroundColor: "hsla(100, 100%, 100%, 0.8)",
  backdropFilter: "saturate(180%) blur(5px)",
});

export const Title = styled("p")({
  fontWeight: "var(--font-medium)",
  color: "hsl(0, 0%, 0%)",
  textAlign: "center",
  fontSize: "1.2rem",
});

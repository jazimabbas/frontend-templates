"use client";
import { styled } from "@mui/material";

export const FeatureList = styled("div")({
  marginTop: "64px",
  marginBottom: "64px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const Feature = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px",

  "& > :last-child": {
    fontSize: "1.125rem",
  },
});

export const IconWrapper = styled("div")({
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "99999px",
  backgroundColor: "hsl(226, 100%, 97%)",
  color: "hsl(239, 84%, 67%)",
});

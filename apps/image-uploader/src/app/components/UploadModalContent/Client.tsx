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

export const Title = styled("h5")({
  fontSize: "1.125rem",
  fontWeight: "var(--font-medium)",
});

export const Subtitle = styled("p")({
  fontSize: "14px",
  marginTop: "5px",
  marginBottom: "10px",
});

export const IconWrapper = styled("div")({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "var(--color-base)",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
  marginBottom: "20px",
});

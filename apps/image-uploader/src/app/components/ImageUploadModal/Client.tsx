"use client";
import { styled, SxProps } from "@mui/material";

export const backdropSxProps: SxProps = {
  opacity: "0.7 !important",
  backgroundColor: "#0A0A0A",
};

export const Wrapper = styled("div")({
  "--vertical-spacing": "32px",
  "--horizontal-spacing": "24px",

  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "576px",
  width: "100%",
  backgroundColor: "var(--color-base)",
  borderRadius: "8px",
  padding: "32px 24px",
  maxHeight: "100%",
  overflow: "auto",
});

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

export const Card = styled("div")({
  marginTop: "32px",
  padding: "24px 0",
  borderRadius: "4px",
  border: "1px solid var(--color-text-200)",
  backgroundColor: "#FAFAFA",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
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

export const Title = styled("h5")({
  fontSize: "1.125rem",
  fontWeight: "var(--font-medium)",
});

export const Subtitle = styled("p")({
  fontSize: "14px",
  marginTop: "5px",
  marginBottom: "10px",
});

export const CardsWrapper = styled("div")({
  "--spacing": "32px",

  display: "flex",
  flexDirection: "column",
  gap: "var(--spacing)",
  marginTop: "var(--spacing)",
});

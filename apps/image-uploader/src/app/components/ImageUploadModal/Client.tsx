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

// Upload Limit Component
export const Heading = styled("p")({
  color: "var(--color-danger)",
  fontWeight: "var(--font-semibold)",
  fontSize: "1rem",
});

export const SubHeading = styled("p")({
  fontSize: "12px",
  marginTop: "3px",
});

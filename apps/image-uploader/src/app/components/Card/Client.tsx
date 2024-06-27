"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  display: "flex",
  gap: "16px",
});

export const ImageWrapper = styled("div")({
  width: "80px",
  height: "80px",
  borderRadius: " 6.809px",
  overflow: "hidden",
});

export const IconWrapper = styled(ImageWrapper)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid var(--color-text-200)",
  backgroundColor: "#FAFAFA",
});

export const ErrorMessage = styled("p")({
  color: "var(--color-danger)",
  fontWeight: "var(--font-medium)",
  fontSize: "0.75rem",
});

export const ContentWrapper = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const Filename = styled("h5")({
  fontWeight: "var(--font-semibold)",
  flex: 1,
});

export const FileSize = styled("p")({
  fontSize: "0.75rem",
  marginTop: "3px",
});

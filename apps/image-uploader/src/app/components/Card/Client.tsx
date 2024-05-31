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

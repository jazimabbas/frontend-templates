"use client";
import { styled } from "@mui/material";
import Image from "next/image";

export const Wrapper = styled("div")({
  maxWidth: "340px",
  width: "100%",
  borderRadius: "8px",
  border: "1px solid var(--color-text-200)",
  backgroundColor: "var(--color-base)",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
  overflow: "hidden",
});

export const ImageWrapper = styled("div")({
  width: "100%",
  height: "288px",
  position: "relative",
  overflow: "hidden",
});

export const Img = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px",
});

export const Title = styled("p")({
  color: "var(--color-dark-900)",
  fontWeight: "var(--font-semibold)",
  fontSize: "1.125rem",
  marginBottom: "12px",
});

export const Excerpt = styled("p")({
  marginBottom: "24px",
});

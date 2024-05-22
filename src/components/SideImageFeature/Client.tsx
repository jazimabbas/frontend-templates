"use client";
import { styled } from "@mui/material";
import Image from "next/image";

export const Wrapper = styled("div")(({ theme }) => ({
  padding: "96px",

  [theme.breakpoints.down("tablet")]: {
    padding: "64px 16px",
  },

  [theme.breakpoints.down("mobile")]: {
    padding: "48px 12px",
  },
}));

export const Subtitle = styled("span")({
  fontWeight: "var(--font-semibold)",
  color: "var(--color-primary)",
  marginBottom: "12px",
});

export const Description = styled("p")(({ theme }) => ({
  marginTop: "20px",
  fontSize: "1.25rem",

  [theme.breakpoints.down("mobile")]: {
    fontSize: "1.125rem",
  },
}));

export const FeatureWrapper = styled("div")(({ theme }) => ({
  marginTop: "64px",
  display: "flex",
  gap: "32px",

  "@media (max-width: 950px)": {
    flexDirection: "column",
  },

  [theme.breakpoints.down("tablet")]: {},
}));

export const FeatureList = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

export const Feature = styled("div")({
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
  padding: "10px 0",
});

export const FeatureContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const FeatureTitle = styled("p")({
  color: "var(--color-dark)",
  fontSize: "18px",
  fontWeight: "var(--font-semibold)",
});

export const IconWrapper = styled("div")({
  flexShrink: 0,
  width: "48px",
  height: "48px",
  borderRadius: "9999px",
  padding: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--color-base)",
  color: "var(--color-primary)",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
});

export const ImageWrapper = styled("div")({
  flex: 1,
  borderRadius: "6px",
  overflow: "hidden",
});

export const Img = styled(Image)({
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

"use client";
import Image from "next/image";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  background: "linear-gradient(176deg, #F9FAFB 0.94%, #EDF0F3 316.54%)",
  borderRadius: "6px",
  boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
  padding: "96px",
  width: "100%",

  display: "flex",
  gap: "32px",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width: 1075px)": {
    flexDirection: "column",
  },
});

export const ContentWrapper = styled("div")({
  flex: 3,

  "@media (max-width: 1075px)": {
    flex: 1,
  },
});

export const Description = styled("p")({
  fontSize: "20px",
  marginTop: "24px",
});

export const ActionWrapper = styled("div")({
  marginTop: "64px",
  display: "flex",
  gap: "32px",
});

export const ImageWrapper = styled("div")({
  flex: 4,

  "@media (max-width: 1075px)": {
    flex: 1,
    width: "100%",
  },
});

export const Img = styled(Image)({
  width: "100%",
  height: "526px",
  objectFit: "contain",
  objectPosition: "center",

  "@media (max-width: 1075px)": {
    objectFit: "cover",
  },
});

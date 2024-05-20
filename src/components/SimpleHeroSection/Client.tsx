"use client";
import Image from "next/image";
import { styled } from "@mui/material";
import { Button as Btn } from "../Button";

const breakpoint = "1075px";

export const Wrapper = styled("div")(({ theme }) => ({
  background: "linear-gradient(176deg, #F9FAFB 0.94%, #EDF0F3 316.54%)",
  borderRadius: "6px",
  boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
  padding: "96px",
  width: "100%",

  display: "flex",
  gap: "32px",
  justifyContent: "center",
  alignItems: "center",

  [`@media (max-width: ${breakpoint})`]: {
    flexDirection: "column",
  },

  [theme.breakpoints.down("tablet")]: {
    padding: "64px 16px",
  },

  [theme.breakpoints.down("mobile")]: {
    padding: "48px 12px",
  },
}));

export const ContentWrapper = styled("div")({
  flex: 3,

  [`@media (max-width: ${breakpoint})`]: {
    flex: 1,
  },
});

export const Description = styled("p")({
  fontSize: "1.25rem",
  marginTop: "24px",
});

export const ActionWrapper = styled("div")(({ theme }) => ({
  marginTop: "64px",
  display: "flex",
  gap: "32px",
  flexWrap: "wrap",

  [theme.breakpoints.down("mobile")]: {
    gap: "16px",
    "& > :first-child, & > :last-child": {
      flex: 1,
    },
  },
}));

export const ImageWrapper = styled("div")({
  flex: 4,

  [`@media (max-width: ${breakpoint})`]: {
    flex: 1,
    width: "100%",
  },
});

export const Img = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "526px",
  objectFit: "contain",
  objectPosition: "center",

  [`@media (max-width: ${breakpoint})`]: {
    objectFit: "cover",
  },

  [theme.breakpoints.down("mobile")]: {
    height: "264px",
  },
}));

export const Button = styled(Btn)(({ theme }) => ({
  paddingLeft: "40px",
  paddingRight: "40px",

  [theme.breakpoints.down("tablet")]: {
    paddingLeft: "24px",
    paddingRight: "24px",
  },
}));

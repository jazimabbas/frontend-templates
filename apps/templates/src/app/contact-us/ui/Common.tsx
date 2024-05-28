"use client";
import { MaxWidth as MaxW } from "@/components/MaxWidth";
import { styled } from "@mui/material";

export const Main = styled("div")({
  "--spacing": "16px",
  margin: "var(--spacing)",
  marginTop: 0,
  backgroundColor: "var(--color-base)",
  borderRadius: "6px",
  boxShadow: "0px 10px 15px -3px hsla(0, 0%, 0%, 0.10)",
});

export const MaxWidth = styled(MaxW)(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
}));

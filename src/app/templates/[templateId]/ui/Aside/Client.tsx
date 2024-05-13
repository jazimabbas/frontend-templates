"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("nav")(({ theme }) => ({
  minWidth: "230px",

  [theme.breakpoints.down("tablet")]: {
    display: "none",
  },
}));

export const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});

"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  padding: "96px 0",
  display: "flex",
  gap: "32px",

  [theme.breakpoints.down("tablet")]: {
    flexDirection: "column",
    gap: "64px",
    padding: "64px 0",
  },

  [theme.breakpoints.down("mobile")]: {
    gap: "48px",
    padding: "48px 0",
  },
}));

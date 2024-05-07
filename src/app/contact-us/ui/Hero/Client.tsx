"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  padding: "96px 0",
  display: "flex",
  gap: "32px",

  [theme.breakpoints.down("tablet")]: {
    flexDirection: "column",
    gap: "64px",
  },

  [theme.breakpoints.down("mobile")]: {
    gap: "48px",
  },
}));

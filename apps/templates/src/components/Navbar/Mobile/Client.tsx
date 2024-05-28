"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("nav")({
  display: "flex",
  justifyContent: "space-between",
  padding: "34px 0",

  "@media (min-width: 768px)": {
    display: "none",
  },

  "& svg": {
    cursor: "pointer",
  },
});

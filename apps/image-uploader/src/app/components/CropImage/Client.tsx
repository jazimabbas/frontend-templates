"use client";
import { styled } from "@mui/material";

export const ImageWrapper = styled("div")({
  width: "295px",
  height: "290px",
  backgroundColor: "hsl(0, 0%, 4%)",
});

export const Actions = styled("div")({
  marginTop: "32px",
  display: "flex",
  gap: "12px",

  "& > *": {
    width: "100%",
  },
});

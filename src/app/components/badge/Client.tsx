"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  padding: "200px 0",
  maxWidth: "fit-content",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const BadgesWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  flexWrap: "wrap",
});

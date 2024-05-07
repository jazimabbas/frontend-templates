"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  padding: "96px 0",

  [theme.breakpoints.down("tablet")]: {
    padding: "64px 0",
  },

  [theme.breakpoints.down("mobile")]: {
    padding: "48px 0",
  },
}));

export const Description = styled("p")({
  fontSize: "1.25rem",
  textAlign: "center",
  marginTop: "20px",
});

export const AccordianWrapper = styled("div")({
  paddingTop: "64px",
});

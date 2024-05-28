"use client";
import Link from "next/link";
import { styled } from "@mui/material";

export const Wrapper = styled("footer")(({ theme }) => ({
  padding: "96px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& svg": {
    fill: "var(--color-text-400)",
  },

  [theme.breakpoints.down("tablet")]: {
    padding: "64px 0",
  },

  [theme.breakpoints.down("mobile")]: {
    padding: "48px 0",
  },
}));

export const NavLink = styled(Link)({
  fontWeight: "var(--font-medium)",
  fontSize: "0.875rem",
});

export const LinksWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "26px",
  flexWrap: "wrap",
});

export const IconsWrapper = styled("div")({
  display: "flex",
  gap: "24px",
  marginTop: "32px",
  marginBottom: "16px",
});

export const Copyright = styled("p")({
  fontSize: "0.875rem",
  color: "var(--color-dark)",
  textAlign: "center",
});

"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  flex: 1,
});

export const Heading = styled("h1")(({ theme }) => ({
  marginTop: "11px",
  marginBottom: "20px",

  [theme.breakpoints.down("tablet")]: {
    marginTop: "0px",
  },
}));

export const Description = styled("p")(({ theme }) => ({
  fontSize: "1.25rem",

  [theme.breakpoints.down("mobile")]: {
    fontSize: "1.125rem",
  },
}));

export const Items = styled("ul")({
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginTop: "48px",
  listStyle: "none",
});

export const Item = styled("li")({
  display: "flex",
  gap: "12px",
  alignItems: "center",
});

export const IconWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--color-base)",
  boxShadow: "0px 1px 3px 0px hsla(0, 0%, 0%, 0.10), 0px 1px 2px 0px hsla(0, 0%, 0%, 0.06)",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  color: "var(--color-primary)",
});

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

export const ContentWrapper = styled("div")({
  flex: 1,
});

export const Heading = styled("h1")({
  marginTop: "11px",
  marginBottom: "20px",
});

export const Description = styled("p")({
  fontSize: "1.25rem",
});

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

export const FormWrapper = styled("div")(({ theme }) => ({
  flex: 1,
  alignSelf: "flex-start",
  padding: "32px",
  borderRadius: "8px",
  border: "1px solid var(--color-text-200)",
  backgroundColor: "var(--color-base)",
  boxShadow: "0px 10px 15px -3px hsla(0, 0%, 0%, 0.10), 0px 4px 6px -2px hsla(0, 0%, 0%, 0.05)",

  [theme.breakpoints.down("tablet")]: {
    alignSelf: "unset",
  },

  [theme.breakpoints.down("mobile")]: {
    padding: "16px",
  },
}));

export const FieldWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "32px",

  [theme.breakpoints.down("mobile")]: {
    flexDirection: "column",
    gap: "24px",
  },
}));

"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("form")(({ theme }) => ({
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

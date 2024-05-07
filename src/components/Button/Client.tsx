"use client";
import { styled } from "@mui/material";

export const GeneralButton = styled("button")({
  padding: "10px 16px",
  borderRadius: "4px",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
  color: "var(--color-base)",
  fontWeight: "var(--font-medium)",
  border: "1px solid transparent",
  transition: "background-color 0.3s, box-shadow 0.3s",
  cursor: "pointer",

  "&:hover": {
    boxShadow: "0px 1px 3px 0px hsla(0, 0%, 0%, 0.1), 0px 1px 2px 0px hsla(0, 0%, 0%, 0.06)",
  },

  "&:focus": {
    boxShadow: "0px 0px 0px 4px var(--box-shadow-focus)",
  },

  "&:disabled": {
    backgroundColor: "var(--color-disabled)",
    color: "var(--color-text-disabled)",
    cursor: "not-allowed",
  },
});

export const PrimaryButton = styled(GeneralButton)({
  backgroundColor: "var(--color-primary)",

  "&:hover, &:focus": {
    backgroundColor: "var(--color-primary-light)",
  },
});

export const SecondaryButton = styled(GeneralButton)({
  color: "var(--color-dark)",
  backgroundColor: "var(--color-base)",

  "&:hover, &:focus": {
    backgroundColor: "var(--color-base-50)",
    border: "1px solid var(--color-base-200)",
  },
});

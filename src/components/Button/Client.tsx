"use client";
import { styled } from "@mui/material";

export const GeneralButton = styled("button")({
  padding: "12px 20px",
  borderRadius: "4px",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
  color: "var(--color-base)",
  fontWeight: "var(--font-medium)",
  border: "1px solid transparent",
  transition: "background-color 0.3s, box-shadow 0.3s",
  cursor: "pointer",

  "&:hover": {
    boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
  },

  "&:focus": {
    boxShadow: "0px 0px 0px 4px rgba(68, 76, 231, 0.12)",
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

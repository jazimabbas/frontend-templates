"use client";
import { styled, SxProps } from "@mui/material";

export const Wrapper = styled("div", { shouldForwardProp: (prop) => prop !== "fullWidth" })<{
  fullWidth: boolean;
}>(({ fullWidth }) => ({
  fontSize: "0.875rem",
  width: fullWidth ? "100%" : undefined,
}));

export const Label = styled("label")({
  fontWeight: "var(--font-medium)",
  color: "var(--color-text-700)",
  marginBottom: "6px",
  display: "inline-block",
});

export const FieldWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 14px",
  borderRadius: "4px",
  border: "1px solid var(--color-text-200)",
  backgroundColor: "var(--color-text-50)",

  ":focus-within": {
    boxShadow:
      "0px 0px 0px 1px #444CE7, 0px 1px 2px 0px hsla(220, 42.86%, 10.98%, 0.05), 0px 0px 0px 4px hsla(237.06, 77.25%, 58.63%, 0.12)",

    "&[aria-invalid='true']": {
      boxShadow: "0px 0px 0px 1px #D92D20, 0px 0px 0px 4px rgba(217, 45, 32, 0.12)",
    },
  },

  "&[aria-disabled='true']": {
    borderColor: "var(--color-text-100)",
    cursor: "not-allowed",
  },
});

const inputStyles: SxProps = {
  color: "var(--color-text-900)",
  flex: 1,
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  width: "100%",

  "::placeholder": {
    color: "var(--color-text-500)",
  },

  ":disabled": {
    color: "var(--color-text-400)",
    cursor: "not-allowed",
  },
};

export const InputField = styled("input")({
  ...inputStyles,
});

export const TextArea = styled("textarea")({
  ...inputStyles,
  resize: "none",
});

export const Hint = styled("span")({
  color: "var(--color-text-500)",
  display: "inline-block",
  marginTop: "6px",

  "&[aria-invalid='true']": {
    color: "var(--color-danger)",
  },
});

export const Length = styled(Hint)({
  textAlign: "right",
  display: "block",
});

export const IconWrapper = styled("button")({
  color: "var(--color-text-400)",
  padding: "0",
  border: "none",
  backgroundColor: "transparent",

  "&[aria-invalid='true']": {
    color: "var(--color-danger)",
  },
});

"use client";
import { styled, SxProps } from "@mui/material";
import { Size } from "./types";

const disabledStyles: SxProps = {
  backgroundColor: "transparent",
  boxShadow: "none",
};

const mdStyles = (iconOnly: boolean): SxProps => {
  return {
    padding: iconOnly ? "10px" : "10px 14px",
    fontSize: "0.875rem",
    gap: "4px",
  };
};

const lgStyles = (iconOnly: boolean): SxProps => {
  return {
    padding: iconOnly ? "12px" : "10px 16px",
    fontSize: "1rem",
    gap: "6px",
  };
};

const xlStyles = (iconOnly: boolean): SxProps => {
  return {
    padding: iconOnly ? "14px" : "12px 20px",
    fontSize: "1rem",
    gap: "6px",
  };
};

const xl2Styles = (iconOnly: boolean): SxProps => {
  return {
    padding: iconOnly ? "16px" : "16px 24px",
    fontSize: "1.125rem",
    gap: "10px",
  };
};

export const GeneralButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "size" && prop !== "iconOnly",
})<{ size: Size; iconOnly: boolean }>(({ size, iconOnly }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  boxShadow: "0px 1px 3px 0px hsla(0, 0%, 0%, 0.10), 0px 1px 2px 0px hsla(0, 0%, 0%, 0.06)",
  cursor: "pointer",
  border: "1px solid transparent",
  transition: "background-color 0.3s, box-shadow 0.3s, color 0.3s",
  fontWeight: "var(--font-medium)",

  "&:hover": {
    boxShadow: "0px 1px 3px 0px hsla(0, 0%, 0%, 0.1), 0px 1px 2px 0px hsla(0, 0%, 0%, 0.06)",
  },

  "&:focus": {
    boxShadow: "0px 0px 0px 4px var(--box-shadow-focus)",
  },

  "&:disabled, &:disabled:hover": {
    backgroundColor: "var(--color-disabled)",
    color: "var(--color-text-disabled)",
    cursor: "not-allowed",
  },

  ...(size === "md" && (mdStyles(iconOnly) as any)),
  ...(size === "lg" && (lgStyles(iconOnly) as any)),
  ...(size === "xl" && (xlStyles(iconOnly) as any)),
  ...(size === "2xl" && (xl2Styles(iconOnly) as any)),
}));

export const PrimaryButton = styled(GeneralButton)({
  backgroundColor: "var(--color-primary)",
  color: "var(--color-base)",

  "&:hover, &:focus": {
    backgroundColor: "var(--color-primary-light)",
  },
});

export const SecondaryButton = styled(GeneralButton)({
  borderColor: "#E6E6E6",
  backgroundColor: "var(--color-base)",
  color: "var(--color-dark-900)",

  "&:hover, &:focus": {
    backgroundColor: "#FAFAFA",
  },
});

export const TertiaryButton = styled(GeneralButton)({
  borderColor: "transparent",
  backgroundColor: "transparent",
  boxShadow: "none",
  color: "var(--color-primary)",

  "&:hover": {
    backgroundColor: "#FAFAFA",
    boxShadow: "none",
  },

  "&:focus": {
    backgroundColor: "#FAFAFA",
  },

  "&:focus:hover": {
    boxShadow: "0px 0px 0px 4px var(--box-shadow-focus)",
  },

  "&:disabled, &:disabled:hover": disabledStyles,
});

export const LinkButton = styled(TertiaryButton)({
  padding: 0,

  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const LinkGrayButton = styled(LinkButton)({
  color: "var(--color-text)",

  "&:hover, &:focus": {
    color: "var(--color-dark-900)",
  },
});

export const DestructiveButton = styled(PrimaryButton)({
  backgroundColor: "#DC2626",

  "&:hover, &:focus": {
    backgroundColor: "var(--color-danger-100)",
  },

  "&:focus": {
    boxShadow: "0px 0px 0px 1px #D92D20, 0px 0px 0px 4px rgba(217, 45, 32, 0.12)",
  },

  "&:disabled, &:disabled:hover": disabledStyles,
});

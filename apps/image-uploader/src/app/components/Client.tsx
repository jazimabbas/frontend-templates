"use client";
import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  width: "100%",
  minHeight: "100%",
  padding: "16px",
  maxWidth: "768px",
  marginLeft: "auto",
  marginRight: "auto",
  overflow: "auto",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Card = styled("div")({
  backgroundColor: "var(--color-base)",
  border: "1px solid var(--color-text-200)",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
  width: "100%",
  overflow: "hidden",
});

export const ContentWrappeer = styled("div")(({ theme }) => ({
  "--spacing": "32px",
  padding: "10px var(--spacing)",
  paddingBottom: "32px",
  position: "relative",

  [theme.breakpoints.down("mobile")]: {
    "--spacing": "16px",
  },
}));

export const Header = styled("div")({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
});

export const AvatarWrapper = styled("div", { shouldForwardProp: (prop) => prop !== "hasImage" })<{
  hasImage?: boolean;
}>(({ hasImage, theme }) => ({
  width: "160px",
  height: "160px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  border: "6px solid",
  borderColor: hasImage ? "var(--color-base)" : "whitesmoke",
  transform: "translate(var(--spacing), -60%)",
  position: "absolute",
  top: "0",
  left: "0",

  [theme.breakpoints.down("mobile")]: {
    width: "96px",
    height: "96px",
    borderWidth: "2.5px",
    transform: "translate(var(--spacing), -50%)",
  },
}));

export const Title = styled("h2")(({ theme }) => ({
  margin: "24px 0",
  fontSize: "1.875rem",

  [theme.breakpoints.up("mobile")]: {
    paddingTop: "16px",
  },
}));

export const AboutWrapper = styled("div")({
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  fontSize: "1.25rem",
  color: "var(--color-dark)",

  ".light": {
    color: "var(--color-text)",
  },
});

export const Location = styled("div")({
  marginTop: "11px",
  display: "flex",
  gap: "16px",
  fontSize: "1.125rem",
});

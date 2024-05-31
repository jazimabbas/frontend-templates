"use client";
import { styled } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

export const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
  marginBottom: "5px",
});

export const ProgressWrapper = styled("div")({
  flex: 1,
  color: "var(--color-primary)",
});

export const Progress = styled(LinearProgress)({
  height: "6px",
  backgroundColor: "var(--color-text-200)",
  borderRadius: "9999px",
});

export const ProgressCount = styled("span")({
  fontSize: "0.75rem",
  fontWeight: "var(--font-medium)",
});

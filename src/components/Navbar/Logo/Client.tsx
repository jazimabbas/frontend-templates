"use client";
import Link from "next/link";
import { styled } from "@mui/material";

export const LogoWrapper = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const LogoName = styled("span")({
  fontSize: "1rem",
  color: "var(--color-text-900)",
  fontWeight: "var(--font-semibold)",
  letterSpacing: "-0.96px",
});

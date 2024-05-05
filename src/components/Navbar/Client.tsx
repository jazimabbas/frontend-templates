"use client";
import { styled } from "@mui/material";
import Link from "next/link";

export const Wrapper = styled("nav")({
  padding: "28px 0",
});

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

export const NavItems = styled("ul")({
  display: "flex",
  alignItems: "center",
  gap: "32px",
  listStyle: "none",
  padding: 0,
});

export const NavItem = styled("li")({
  fontWeight: "var(--font-medium)",
});

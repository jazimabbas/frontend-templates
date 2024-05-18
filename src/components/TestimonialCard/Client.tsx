"use client";
import Image from "next/image";
import { styled } from "@mui/material";
import { Card } from "../common/Card";

export const Wrapper = styled(Card)({
  padding: "24px",
  display: "flex",
  gap: "16px",
});

export const Header = styled("div")({
  display: "flex",
  gap: "16px",
});

export const Avatar = styled(Image)({
  width: "48px",
  height: "48px",
  borderRadius: "48px",
});

export const HeaderContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1px",
  flex: 1,
});

export const Name = styled("p")({
  fontSize: "1.125rem",
  fontWeight: "var(--font-semibold)",
  color: "var(--color-dark-900)",
  width: "100%",

  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",
});

export const Handle = styled("p")({
  fontSize: "0.875rem",
});

export const Description = styled("p")({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "5",
  overflow: "hidden",
});

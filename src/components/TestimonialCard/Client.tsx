"use client";
import Image from "next/image";
import { styled } from "@mui/material";

export const Wrapper = styled("a")({
  backgroundColor: "var(--color-base)",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  border: "1px solid var(--color-text-200)",
  borderRadius: "8px",
  boxShadow: "0px 1px 3px 0px hsla(0, 0%, 0%, 0.10), 0px 1px 2px 0px hsla(0, 0%, 0%, 0.06)",
  maxWidth: "340px",
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
  fontSize: "18px",
  fontWeight: "var(--font-semibold)",
  color: "var(--color-dark-900)",
  width: "100%",

  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",
});

export const Handle = styled("p")({
  fontSize: "14px",
});

export const Description = styled("p")({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "5",
  overflow: "hidden",
});

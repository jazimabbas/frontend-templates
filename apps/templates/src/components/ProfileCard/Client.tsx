"use client";
import { styled } from "@mui/material";
import { Card } from "../common/Card";
import Image from "next/image";

export const Wrapper = styled(Card)({
  padding: "24px 16px",
  justifyContent: "center",
  alignItems: "center",
});

export const Avatar = styled(Image)({
  width: "64px",
  height: "64px",
  borderRadius: "64px",
});

export const Name = styled("p")({
  fontSize: "1.25rem",
  color: "var(--color-dark-900)",
  fontWeight: "var(--font-medium)",
  marginTop: "24px",
});

export const Role = styled("p")({
  marginTop: "1px",
  fontSize: "0.875rem",
  fontWeight: "var(--font-normal)",
});

export const Bio = styled("p")({
  fontWeight: "var(--font-normal)",
  textAlign: "center",
  marginTop: "24px",
  marginBottom: "40px",
});

export const IconsWrapper = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  marginTop: "24px",
});

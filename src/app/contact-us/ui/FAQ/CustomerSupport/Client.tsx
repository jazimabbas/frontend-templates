"use client";
import { styled } from "@mui/material";

export const Card = styled("div")(({ theme }) => ({
  marginTop: "20px",
  padding: "32px",
  borderRadius: "8px",
  border: "1px solid var(--color-text-200)",
  backgroundColor: "var(--color-base)",
  boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",

  "& > :last-child": {
    flexShrink: 0,
  },

  [theme.breakpoints.down("mobile")]: {
    flexDirection: "column",
    alignItems: "start",
    padding: "16px",

    "& > :last-child": {
      width: "100%",
    },
  },
}));

export const Title = styled("h4")({
  fontWeight: "var(--font-semibold)",
  marginBottom: "8px",
});

export const Link = styled("a")({
  color: "var(--color-primary)",
});

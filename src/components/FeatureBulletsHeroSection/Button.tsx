"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import { Button as Btn } from "../common/Hero";

export function Button(props: React.ComponentProps<typeof Btn>) {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("mobile"));

  return <Btn {...props} size={isMobileDevice ? "xl" : "2xl"} />;
}

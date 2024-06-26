import { SxProps } from "@mui/material";
import { Badge } from "./Client";

export type BadgeSize = "sm" | "md" | "lg";

export type BadgeColor = "neutral" | "error" | "warning" | "success" | "brand";

export type BadgeSizes = {
  [key in BadgeSize]: SxProps;
};

export type BadgeColors = {
  [key in BadgeColor]: SxProps;
};

export type BadgeProps = Omit<React.ComponentProps<typeof Badge>, "size" | "color"> & {
  size?: BadgeSize;
  color?: BadgeColor;
};

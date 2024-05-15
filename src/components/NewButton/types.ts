import { GeneralButton } from "./Client";

export type Variant = "primary" | "secondary" | "tertiary" | "destructive" | "link" | "link:gray";

export type Size = "md" | "lg" | "xl" | "2xl";

export type ButtonProps = Omit<React.ComponentProps<typeof GeneralButton>, "size"> & {
  variant?: Variant;
  size?: Size;
  leftIcon?: any;
  rightIcon?: any;
};

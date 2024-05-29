import { GeneralButton } from "./GeneralButton";

export type Variant = "primary" | "secondary" | "tertiary" | "destructive" | "link" | "link:gray";

export type Size = "sm" | "md" | "lg" | "xl" | "2xl";

export type ButtonProps = Omit<React.ComponentProps<typeof GeneralButton>, "size" | "iconOnly"> & {
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ComponentType<any>;
  rightIcon?: React.ComponentType<any>;
  [x: string]: any;
} & (
    | { iconOnly: true; icon: React.ComponentType<any> }
    | { iconOnly?: false; icon?: React.ComponentType<any> }
  );

export type Components = {
  [_ in Variant]: typeof GeneralButton;
};

export type IconSizes = {
  [_ in Size]: number;
};

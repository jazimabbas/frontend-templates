export type InputProps = {
  label: string;
  id: string;
  hasError?: boolean;
  hintMessage?: string;
  fullWidth?: boolean;
};

export type IconProps = React.ComponentProps<"button"> & { iconSize?: number };

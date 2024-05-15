import { ButtonProps, Variant } from "./types";
import {
  DestructiveButton,
  GeneralButton,
  LinkButton,
  LinkGrayButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./Client";

type Components = {
  [key in Variant]: typeof GeneralButton;
};

const components: Components = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
  link: LinkButton,
  destructive: DestructiveButton,
  "link:gray": LinkGrayButton,
};

export function Button({ variant = "primary", size = "md", ...delegated }: ButtonProps) {
  const Component = components[variant];
  return <Component {...delegated} size={size} />;
}

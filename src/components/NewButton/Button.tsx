import {
  DestructiveButton,
  GeneralButton,
  LinkButton,
  LinkGrayButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./Client";

type Variant = "primary" | "secondary" | "tertiary" | "destructive" | "link" | "link:gray";

type Props = React.ComponentProps<typeof GeneralButton> & {
  variant?: Variant;
};

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

export function Button({ variant = "primary", ...delegated }: Props) {
  const Component = components[variant];
  return <Component {...delegated} />;
}

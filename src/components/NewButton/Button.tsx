import { ButtonProps, Size, Variant } from "./types";
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

type IconSizes = {
  [key in Size]: number;
};

const components: Components = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
  link: LinkButton,
  destructive: DestructiveButton,
  "link:gray": LinkGrayButton,
};

const iconSizes: IconSizes = {
  md: 18,
  lg: 18,
  xl: 18,
  "2xl": 20,
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconOnly = false,
  icon: Icon,
  children,
  ...delegated
}: ButtonProps) {
  const Component = components[variant];
  const iconSize = iconSizes[size];

  const render = () => {
    if (iconOnly) return <Icon size={iconSize} />;
    return (
      <>
        {LeftIcon && <LeftIcon size={iconSize} />}
        {children && <span>{children}</span>}
        {RightIcon && <RightIcon size={iconSize} />}
      </>
    );
  };

  return (
    <Component {...delegated} size={size} iconOnly={iconOnly}>
      {render()}
    </Component>
  );
}

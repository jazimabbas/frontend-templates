import { type IconProps } from "./types";
import { IconWrapper } from "./Client";

type InputIconProps = IconProps & {
  icon: React.ComponentType<any>;
  hasError: boolean;
  defaultIconSize?: number;
};

export const InputIcon = ({
  icon: Icon,
  hasError,
  iconSize,
  defaultIconSize = 16,
  ...delegated
}: InputIconProps) => {
  return (
    <IconWrapper aria-invalid={hasError} {...delegated}>
      <Icon size={iconSize ?? defaultIconSize} />
    </IconWrapper>
  );
};

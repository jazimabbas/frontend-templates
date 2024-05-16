import type { InputProps } from "./types";
import { FieldWrapper, Label, InputField, Wrapper, Hint, IconWrapper } from "./Client";

type IconProps = React.ComponentProps<"button">;

type Props = React.ComponentProps<typeof InputField> &
  InputProps & {
    fullWidth?: boolean;
    showHint?: boolean;
    leftIcon?: React.ComponentType<any>;
    rightIcon?: React.ComponentType<any>;
    leftIconProps?: IconProps;
    rightIconProps?: IconProps;
  };

export function Input({
  label,
  id,
  disabled,
  hasError = false,
  hintMessage,
  fullWidth = true,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconProps = {},
  rightIconProps = {},
  showHint,
  ...delegated
}: Props) {
  const hintId = `${id}-hint`;

  return (
    <Wrapper fullWidth={fullWidth}>
      <Label htmlFor={id}>{label}</Label>
      <FieldWrapper aria-disabled={disabled} aria-invalid={hasError}>
        {LeftIcon && <InputIcon icon={LeftIcon} hasError={false} {...leftIconProps} />}
        <InputField id={id} {...delegated} aria-describedby={hintId} />
        {RightIcon && <InputIcon icon={RightIcon} hasError={hasError} {...rightIconProps} />}
      </FieldWrapper>
      {showHint && (
        <Hint id={hintId} aria-invalid={hasError}>
          {hintMessage}
        </Hint>
      )}
    </Wrapper>
  );
}

type InputIconProps = IconProps & { icon: React.ComponentType<any>; hasError: boolean };

const InputIcon = ({ icon: Icon, hasError, ...delegated }: InputIconProps) => {
  return (
    <IconWrapper aria-invalid={hasError} {...delegated}>
      <Icon size={16} />
    </IconWrapper>
  );
};

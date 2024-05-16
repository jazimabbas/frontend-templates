import type { IconProps, InputProps } from "./types";
import { InputIcon } from "./Icon";
import { FieldWrapper, Label, InputField, Wrapper, Hint } from "./Client";

type Props = React.ComponentProps<typeof InputField> &
  InputProps & {
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
        {LeftIcon && (
          <InputIcon icon={LeftIcon} hasError={false} defaultIconSize={20} {...leftIconProps} />
        )}
        <InputField id={id} {...delegated} disabled={disabled} aria-describedby={hintId} />
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

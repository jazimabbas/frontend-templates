import type { InputProps } from "./types";
import { FieldWrapper, Label, InputField, Wrapper, Hint, Icon } from "./Client";

type Props = React.ComponentProps<typeof InputField> & InputProps;

export function Input({
  label,
  id,
  disabled,
  hasError = false,
  hintMessage,
  hasIcon = false,
  ...delegated
}: Props) {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <FieldWrapper aria-disabled={disabled} aria-invalid={hasError}>
        <InputField id={id} {...delegated} />
        {hasIcon && <Icon size={16} aria-invalid={hasError} />}
      </FieldWrapper>
      {hintMessage && <Hint aria-invalid={hasError}>{hintMessage}</Hint>}
    </Wrapper>
  );
}

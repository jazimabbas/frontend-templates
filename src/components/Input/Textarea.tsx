import { InputProps } from "./types";
import { FieldWrapper, Label, Wrapper, Hint, Icon, TextArea, Length } from "./Client";

type Props = React.ComponentProps<typeof TextArea> &
  InputProps & {
    showLen?: boolean;
    maxLen?: number;
    currentLen?: number;
  };

export function Textarea({
  label,
  id,
  disabled,
  hasError = false,
  hintMessage,
  hasIcon = false,
  showLen = true,
  maxLen = 500,
  currentLen = 0,
  sx,
  ...delegated
}: Props) {
  const renderHint = () => {
    const hasMaxLengthExceed = currentLen > maxLen;
    const showLengthMessageError = showLen && hasMaxLengthExceed;

    if (showLen)
      return (
        <Length aria-invalid={showLengthMessageError}>
          {currentLen}/{maxLen ?? 500}
        </Length>
      );

    if (hintMessage) return <Hint aria-invalid={hasError}>{hintMessage}</Hint>;
  };

  return (
    <Wrapper sx={sx}>
      <Label htmlFor={id}>{label}</Label>
      <FieldWrapper aria-disabled={disabled} aria-invalid={hasError}>
        <TextArea id={id} {...delegated} />
        {hasIcon && <Icon size={16} aria-invalid={hasError} />}
      </FieldWrapper>
      {renderHint()}
    </Wrapper>
  );
}

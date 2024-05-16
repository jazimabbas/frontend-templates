import { InputProps } from "./types";
import { FieldWrapper, Label, Wrapper, Hint, TextArea, Length } from "./Client";

type Props = React.ComponentProps<typeof TextArea> &
  InputProps & {
    showLen?: boolean;
    maxLen?: number;
    currentLen?: number;
    showHint?: boolean;
  };

export function Textarea({
  fullWidth = true,
  label,
  id,
  disabled,
  hasError = false,
  hintMessage,
  showLen = true,
  maxLen = 500,
  currentLen = 0,
  sx,
  showHint = false,
  ...delegated
}: Props) {
  let isError = hasError;
  if (showLen) isError = isError || currentLen > maxLen;

  const renderHint = () => {
    const hasMaxLengthExceed = currentLen > maxLen;
    const showLengthMessageError = showLen && hasMaxLengthExceed;

    if (hintMessage) return <Hint aria-invalid={hasError}>{hintMessage}</Hint>;

    if (showLen)
      return (
        <Length aria-invalid={showLengthMessageError}>
          {currentLen}/{maxLen ?? 500}
        </Length>
      );
  };

  return (
    <Wrapper fullWidth={fullWidth} sx={sx}>
      <Label htmlFor={id}>{label}</Label>
      <FieldWrapper className="textarea" aria-disabled={disabled} aria-invalid={isError}>
        <TextArea id={id} disabled={disabled} {...delegated} />
      </FieldWrapper>
      {showHint && renderHint()}
    </Wrapper>
  );
}

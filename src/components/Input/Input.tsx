import { RiQuestionLine } from "@remixicon/react";
import { FieldWrapper, Label, InputField, Wrapper, Hint } from "./Client";

export function Input() {
  return (
    <Wrapper>
      <Label>Email</Label>
      <FieldWrapper aria-disabled>
        <InputField placeholder="name@gmail.com" disabled />
        <RiQuestionLine size={16} />
      </FieldWrapper>
      <Hint>This is a hint text.</Hint>
    </Wrapper>
  );
}

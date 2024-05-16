import { Metadata } from "next";
import { RiMailLine, RiQuestionLine } from "@remixicon/react";
import { Wrapper } from "./Client";
import { Input } from "@/components/NewInput";
import { GlobalStyles } from "../common/Global";
import { MaxWidth } from "@/components/MaxWidth";

export const metadata: Metadata = {
  title: "Text Input Component",
};

export default function TextInputPage() {
  return (
    <>
      <GlobalStyles />
      <MaxWidth>
        <Wrapper>
          <Input
            id="email1"
            label="Email"
            placeholder="name@email.com"
            rightIcon={RiQuestionLine}
            showHint
            hintMessage="This is a hint text."
            fullWidth
          />

          <Input
            id="email2"
            label="Email"
            placeholder="name@email.com"
            leftIcon={RiMailLine}
            rightIcon={RiQuestionLine}
            showHint
            hintMessage="This is a hint text."
            fullWidth
          />

          <Input
            id="email3"
            label="Email"
            placeholder="name@email.com"
            rightIcon={RiQuestionLine}
            showHint
            hintMessage="This is a hint text."
            fullWidth
            disabled
          />

          <Input
            id="email4"
            label="Email"
            defaultValue="name@email.com"
            rightIcon={RiQuestionLine}
            showHint
            hintMessage="This is an error message."
            fullWidth
            hasError
          />
        </Wrapper>
      </MaxWidth>
    </>
  );
}

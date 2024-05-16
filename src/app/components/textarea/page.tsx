import { Metadata } from "next";
import { Wrapper } from "./Client";
import { GlobalStyles } from "../common/Global";
import { MaxWidth } from "@/components/MaxWidth";
import { Textarea } from "@/components/NewInput";

export const metadata: Metadata = {
  title: "TextArea Component",
};

export default function TextareaPage() {
  return (
    <>
      <GlobalStyles />
      <MaxWidth>
        <Wrapper>
          <Textarea
            id="description1"
            label="Description"
            placeholder="Write your message..."
            showHint
            rows={4}
          />

          <Textarea
            id="description2"
            label="Description"
            placeholder="Write your message..."
            showHint
            hasError
            hintMessage="This field is required"
            rows={4}
          />

          <Textarea
            id="description3"
            label="Description"
            placeholder="Write your message..."
            showHint
            rows={4}
            disabled
          />
        </Wrapper>
      </MaxWidth>
    </>
  );
}

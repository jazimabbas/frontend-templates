import { Button } from "@/components/Button";
import { Textarea, Input } from "@/components/Input";
import { Wrapper, FieldWrapper } from "./Client";

export function ContactForm() {
  return (
    <Wrapper>
      <FieldWrapper>
        <Input id="name" label="Name" placeholder="Your name" />
        <Input id="email" label="Email" placeholder="example@example.com" />
      </FieldWrapper>
      <Textarea
        sx={{ marginTop: "24px", marginBottom: "40px" }}
        id="message"
        label="Message"
        placeholder="Write your message..."
        rows={5}
        showLen
        maxLen={500}
      />
      <Button sx={{ width: "100%" }}>Submit</Button>
    </Wrapper>
  );
}

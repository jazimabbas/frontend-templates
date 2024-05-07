import { RiBuildingLine, RiMailLine, RiPhoneLine } from "@remixicon/react";
import {
  ContentWrapper,
  Description,
  FieldWrapper,
  FormWrapper,
  Heading,
  IconWrapper,
  Item,
  Items,
  Wrapper,
} from "./Client";
import { Input, Textarea } from "@/components/Input";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>Talk to our team</Heading>
        <Description>
          {"We're"} committed to delivering the support you require to make your experience as
          smooth as possible.
        </Description>
        <Items>
          <Item>
            <IconWrapper>
              <RiBuildingLine />
            </IconWrapper>
            <span>123 Maple Street, Springfield, IL, USA</span>
          </Item>
          <Item>
            <IconWrapper>
              <RiPhoneLine />
            </IconWrapper>
            <span>+1 (650) 555-0198</span>
          </Item>
          <Item>
            <IconWrapper>
              <RiMailLine />
            </IconWrapper>
            <span>hello@abstractly.com</span>
          </Item>
        </Items>
      </ContentWrapper>
      <FormWrapper>
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
      </FormWrapper>
    </Wrapper>
  );
}

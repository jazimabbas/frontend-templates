import { RiBuildingLine, RiMailLine, RiPhoneLine } from "@remixicon/react";
import {
  ContentWrapper,
  Description,
  FormWrapper,
  Heading,
  IconWrapper,
  Item,
  Items,
  Wrapper,
} from "./Client";

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
      <FormWrapper />
    </Wrapper>
  );
}

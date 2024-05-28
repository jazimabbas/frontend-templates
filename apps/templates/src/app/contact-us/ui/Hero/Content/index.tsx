import { RiBuildingLine, RiPhoneLine, RiMailLine } from "@remixicon/react";
import { Wrapper, Heading, Description, Items, Item, IconWrapper } from "./Client";

export function Content() {
  return (
    <Wrapper>
      <Heading>Talk to our team</Heading>
      <Description>
        {"We're"} committed to delivering the support you require to make your experience as smooth
        as possible.
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
    </Wrapper>
  );
}

import { RiIndeterminateCircleLine } from "@remixicon/react";
import { Wrapper, Item, Content, Title, Description } from "./Client";

export function Accordian({ isLast = false }: { isLast?: boolean }) {
  return (
    <Wrapper>
      <Item>
        <Content>
          <Title>What types of images are available on your platform?</Title>
          <Description>
            Our platform offers a diverse range of abstract images to suit various preferences and
            needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a
            wide selection to cater to different tastes.
          </Description>
        </Content>
        <RiIndeterminateCircleLine color="var(--color-text-400)" />
      </Item>
      {!isLast && <hr />}
    </Wrapper>
  );
}

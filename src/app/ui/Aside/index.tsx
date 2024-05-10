import { Items, Title, Wrapper, Item } from "./Client";

export function Aside() {
  return (
    <Wrapper>
      <Title>Page Sections</Title>
      <Items>
        <Item aria-selected>Contact us</Item>
        <Item>Contact us</Item>
      </Items>
    </Wrapper>
  );
}

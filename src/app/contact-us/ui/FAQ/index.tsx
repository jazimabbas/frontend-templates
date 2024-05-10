import { Accordian } from "./Accordian";
import { CustomerSupport } from "./CustomerSupport";
import { AccordianWrapper, Description, Wrapper } from "./Client";

export function FAQ() {
  return (
    <Wrapper>
      <h2 className="center">Frequently asked questions</h2>
      <Description>Choose any questions you need</Description>
      <AccordianWrapper>
        <Accordian />
        <Accordian />
        <Accordian isLast />
        <CustomerSupport />
      </AccordianWrapper>
    </Wrapper>
  );
}
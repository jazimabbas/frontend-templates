import { Titlebar } from "./Titlebar";
import { Iframe, Wrapper } from "./Client";

export function CodeExamples() {
  return (
    <Wrapper>
      <Titlebar />
      <Iframe loading="lazy" width="100%" height={350} src="/contact-us" />
    </Wrapper>
  );
}

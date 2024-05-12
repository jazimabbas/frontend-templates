import { Titlebar } from "./Titlebar";
import { Iframe, Wrapper } from "./Client";

export function Preview() {
  return (
    <Wrapper>
      <Titlebar />
      <Iframe
        src="/contact-us"
        loading="lazy"
        width="100%"
        height={500}
        title="#"
      />
    </Wrapper>
  );
}

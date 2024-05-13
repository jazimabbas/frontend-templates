import { MaxWidth } from "@/components/MaxWidth";
import { Title, Wrapper } from "./Client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <MaxWidth>
        <Title>© {currentYear} Jazim Abbas. All Rights Reserved.</Title>
      </MaxWidth>
    </Wrapper>
  );
}

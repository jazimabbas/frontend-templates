import { MaxWidth } from "@/components/MaxWidth";
import { Title, Wrapper } from "./Client";
import { Link } from "@/components/Link";

export function Navbar() {
  return (
    <Wrapper>
      <MaxWidth>
        <Title>
          Frontend Templates
          <span>•</span>
          <Link href="//jazimabbas.dev" target="_blank">Jazim Abbas</Link>
        </Title>
      </MaxWidth>
    </Wrapper>
  );
}

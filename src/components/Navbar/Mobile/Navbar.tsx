import { RiMenuLine } from "@remixicon/react";
import { Logo } from "../Logo";
import { Wrapper } from "./Client";
import { MaxWidth } from "@/components/MaxWidth";

export function MobileNavbar() {
  return (
    <MaxWidth>
      <Wrapper>
        <Logo />
        <RiMenuLine />
      </Wrapper>
    </MaxWidth>
  );
}

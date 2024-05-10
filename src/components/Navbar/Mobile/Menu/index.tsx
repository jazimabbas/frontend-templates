import { Stack } from "@mui/material";
import { RiCloseLine } from "@remixicon/react";
import { Logo } from "../../Logo";
import { Button } from "@/components/Button";
import { ButtonsWrapper, Items, Wrapper } from "./Client";

export function MobileMenu({ onCloseMenu }: { onCloseMenu: any }) {
  return (
    <Wrapper>
      <div>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Logo />
          <RiCloseLine style={{ cursor: "pointer" }} onClick={onCloseMenu} />
        </Stack>
        <Items>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </Items>
      </div>
      <ButtonsWrapper>
        <Button variant="secondary">Learn more</Button>
        <Button variant="primary">Try it out</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}

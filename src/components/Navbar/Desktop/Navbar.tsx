import Stack from "@mui/material/Stack";
import { Logo } from "../Logo";
import { Button } from "../../Button";
import { MaxWidth } from "../../MaxWidth";
import { NavItem, NavItems, NavWrapper, Wrapper } from "./Client";

export function DesktopNavbar() {
  return (
    <Wrapper>
      <MaxWidth>
        <NavWrapper>
          <Stack flexDirection="row" alignItems="center" gap="96px">
            <Logo />
            <NavItems>
              <NavItem>
                <a href="">Home</a>
              </NavItem>
              <NavItem>
                <a href="">Features</a>
              </NavItem>
              <NavItem>
                <a href="">Pricing</a>
              </NavItem>
              <NavItem>
                <a href="">About us</a>
              </NavItem>
              <NavItem>
                <a href="">Contact</a>
              </NavItem>
            </NavItems>
          </Stack>
          <Stack flexDirection="row" alignItems="center" gap="16px">
            <Button variant="secondary" sx={{ padding: "10px 16px" }}>
              Learn more
            </Button>
            <Button sx={{ padding: "10px 16px" }}>See pricing</Button>
          </Stack>
        </NavWrapper>
      </MaxWidth>
    </Wrapper>
  );
}

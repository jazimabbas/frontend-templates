import Image from "next/image";
import Stack from "@mui/material/Stack";
import logo from "@/assets/logo.svg";
import { Button } from "../Button";
import { MaxWidth } from "../MaxWidth";
import { LogoName, LogoWrapper, NavItem, NavItems, Wrapper } from "./Client";

export function Navbar() {
  return (
    <Wrapper>
      <MaxWidth>
        <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
          <Stack flexDirection="row" alignItems="center" gap="96px">
            <LogoWrapper href="#">
              <Image src={logo} width={32} height={32} alt="App Logo" />
              <LogoName>Abstractly</LogoName>
            </LogoWrapper>
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
        </Stack>
      </MaxWidth>
    </Wrapper>
  );
}

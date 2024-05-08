import {
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "@remixicon/react";
import { MaxWidth } from "@/components/MaxWidth";
import { Copyright, IconsWrapper, LinksWrapper, NavLink, Wrapper } from "./Client";

export function Footer() {
  return (
    <MaxWidth>
      <Wrapper>
        <LinksWrapper>
          <NavLink href="/">Features</NavLink>
          <NavLink href="/">Pricing</NavLink>
          <NavLink href="/">About us</NavLink>
          <NavLink href="/">Contact</NavLink>
        </LinksWrapper>
        <IconsWrapper>
          <a href="">
            <RiYoutubeLine />
          </a>
          <a href="">
            <RiInstagramLine />
          </a>
          <a href="">
            <RiFacebookBoxLine />
          </a>
          <a href="">
            <RiGithubLine />
          </a>
          <a href="">
            <RiTwitterXLine />
          </a>
        </IconsWrapper>
        <Copyright>© 2024 Abstractly, Inc. All rights reserved.</Copyright>
      </Wrapper>
    </MaxWidth>
  );
}

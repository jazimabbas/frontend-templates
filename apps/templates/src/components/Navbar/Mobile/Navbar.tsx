"use client";
import { useState } from "react";
import { RiMenuLine } from "@remixicon/react";
import { Logo } from "../Logo";
import { Wrapper } from "./Client";
import { MobileMenu } from "./Menu";
import { MaxWidth } from "@/components/MaxWidth";

export function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const body = window.document.body;
    body.classList.toggle("open-menu");
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <MaxWidth>
      <Wrapper>
        <Logo />
        <RiMenuLine onClick={toggleMenu} />
      </Wrapper>
      {isMenuOpen && <MobileMenu onCloseMenu={toggleMenu} />}
    </MaxWidth>
  );
}
